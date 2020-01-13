require('../polyfills/promise');
require('../polyfills/array');
const React                                     = require('react');
const { renderToString }                        = require('react-dom/server');
const { Provider }                              = require('react-redux');
const { renderRoutes }                          = require('react-router-config');
const { StaticRouter }                          = require('react-router');
const { ServerStyleSheet }                      = require('styled-components');
const { Helmet }                                = require('react-helmet');
const { ChunkExtractor, ChunkExtractorManager } = require('@loadable/server');
const { createMemoryHistory }                   = require('history');
const path                                      = require('path');

const routes                 = require('core/components/Router/routes').default;
const { configureStore }     = require('core/utils/store/configureStore');
const { changeThemeAction }  = require('core/actions/theme');
const { changeLocaleAction } = require('core/actions/locale');
const { checkAuth }          = require('server/utils/checkAuth');
const { getLocation }        = require('server/utils/getLocation');
const { prefetch }           = require('server/utils/prefetch');
const { ConfigManager }      = require('core/services');
const ssrReducers            = require('app/reducers/serverReducer').default;

const configManager: iConfigManager = new ConfigManager();

configManager.defaultValues({
    apiHost: 'https://jsonplaceholder.typicode.com',
});

const statsFile = path.resolve(__dirname, '../../dist/loadable-stats.json');

export async function serverSideRendering(req, res) {
    res.set('Service-Worker-Allowed', '/');
    res.set('X-Is-Cacheable', 'true');

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

    const App = () => (
        <Provider store={ store }>
            <StaticRouter context={ {} } location={ getLocation(isLogged, req.url) }>
                <ChunkExtractorManager extractor={ extractor }>
                    { renderRoutes(routes) }
                </ChunkExtractorManager>
            </StaticRouter>
        </Provider>
    );

    const html                = renderToString(sheet.collectStyles(<App />));
    const scriptTags          = extractor.getScriptTags();
    const styleChunksTags     = extractor.getStyleTags(); // loadable components extract styles in chunk files
    const styleComponentsTags = sheet.getStyleTags(); // styled components generate style tag
    const storage             = `window.__PRELOADED_STATE__ = ${ JSON.stringify(store.getState()).replace(/</g, '\\u003c') }`;
    const { title, meta }     = Helmet.renderStatic();

    res.render('index', {
        html,
        storage,
        scriptTags,
        styleChunksTags,
        styleComponentsTags,
        title: title.toString(),
        meta : meta.toString()
    });
}
