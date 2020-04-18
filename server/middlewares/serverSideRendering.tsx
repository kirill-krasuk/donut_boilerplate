import { Request, Response }      from 'express';
import { ChunkExtractor }         from '@loadable/server';
import { createMemoryHistory }    from 'history';
import path                       from 'path';

import { configureStore }         from '@core/utils/store/configureStore';
import { checkAuth }              from '@server/utils/checkAuth';
import { prefetch }               from '@server/utils/prefetch';
import { Context }                from '@server/types/context';
import { ConfigManager }          from '@core/services';
import { initializeState }        from '@server/utils/initializeState';
import { generateAppComponent }   from '@server/utils/generateAppComponent';
import { generateStaticTemplate } from '@server/utils/generateStaticTemplate';
import { renderTemplate }         from '@server/utils/renderTemplate';

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

    const { theme: mode = 'dark', locale = 'en', token } = req.cookies;

    const context: Context = {};

    const history = createMemoryHistory({
        initialEntries: [ req.url ]
    });

    const { store } = configureStore({}, history);
    const extractor = new ChunkExtractor({ statsFile, entrypoints: [ 'bundle' ] });

    const isLogged = checkAuth(req.cookies, res, store);

    await prefetch(store, req.url, { isLogged, token });

    initializeState(store, { mode, locale });

    renderTemplate(res, context, generateStaticTemplate({
        Component: generateAppComponent({
            store,
            context,
            location: req.url,
            extractor
        }),
        store,
        extractor
    }));
}
