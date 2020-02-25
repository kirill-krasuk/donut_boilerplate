import React                                     from 'react';
import { renderToString }                        from 'react-dom/server';
import { Provider }                              from 'react-redux';
import { renderRoutes, RouteConfig }             from 'react-router-config';
import { StaticRouter }                          from 'react-router';
import { Request, Response }                     from 'express';
import { ServerStyleSheet }                      from 'styled-components';
import { Helmet }                                from 'react-helmet';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { createMemoryHistory }                   from 'history';
import path                                      from 'path';

import routes                                    from '@core/components/Router/routes';
import { configureStore }                        from '@core/utils/store/configureStore';
import { changeThemeAction }                     from '@core/actions/theme';
import { changeLocaleAction }                    from '@core/actions/locale';
import { checkAuth }                             from '@server/utils/checkAuth';
import { prefetch }                              from '@server/utils/prefetch';
import { ConfigManager }                         from '@core/services';
import ssrReducers                               from '@app/reducers/serverReducer';

import '@server/polyfills/promise';
import '@server/polyfills/array';

const configManager = new ConfigManager();

configManager.defaultValues({
    apiHost: 'https://jsonplaceholder.typicode.com',
});

const statsFile = path.resolve(__dirname, '../../dist/loadable-stats.json');

export async function serverSideRendering(req: Request, res: Response): Promise<void> {
    res.set('Service-Worker-Allowed', '/');
    res.set('X-Is-Cacheable', 'true');

    const context: any = {};

    const mode   = req.cookies.theme || 'dark';
    const locale = req.cookies.locale || 'en';
    const token  = req.cookies.auth_token || undefined;

    const history = createMemoryHistory({
        initialEntries: [ req.url ]
    });

    const { store } = configureStore({}, history, ssrReducers);
    const extractor = new ChunkExtractor({ statsFile, entrypoints: [ 'bundle' ] });
    const sheet     = new ServerStyleSheet();

    const isLogged = checkAuth(req.cookies, res, store);

    await prefetch(store, req.url, { isLogged, token });

    store.dispatch(changeThemeAction(mode));
    store.dispatch(changeLocaleAction(locale));

    const App = (): JSX.Element => (
        <Provider store={ store }>
            <StaticRouter context={ context } location={ req.url }>
                <ChunkExtractorManager extractor={ extractor }>
                    { renderRoutes(routes as RouteConfig[]) }
                </ChunkExtractorManager>
            </StaticRouter>
        </Provider>
    );

    const { title, meta } = Helmet.renderStatic();

    const template = {
        html               : renderToString(sheet.collectStyles(<App />)),
        scriptTags         : extractor.getScriptTags(),
        styleChunksTags    : extractor.getStyleTags(), // loadable components extract styles in chunk files
        styleComponentsTags: sheet.getStyleTags(), // styled components generate style tag
        storage            : `window.__PRELOADED_STATE__ = ${ JSON.stringify(store.getState()).replace(/</g, '\\u003c') }`,
        title,
        meta
    };

    if (context.url) {
        if (context.status === 404) {
            res.status(404).render('index', template);

            return;
        }

        res.redirect(context.status, context.url);
    } else {
        res.render('index', template);
    }
}
