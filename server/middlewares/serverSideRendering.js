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

const routes             = require('core/components/Router/routes').default;
const { configureStore } = require('core/utils/store/configureStore');

const statsFile = path.resolve(__dirname, '../../dist/loadable-stats.json');

function serverSideRendering(req, res) {
    res.set('Service-Worker-Allowed', '/');
    res.set('X-Is-Cacheable', 'true');

    const { store } = configureStore({}, createMemoryHistory({
        initialEntries: [ req.url ]
    }));
    const extractor = new ChunkExtractor({ statsFile, entrypoints: [ 'bundle' ] });
    const sheet     = new ServerStyleSheet();

    const App = () => (
        <Provider store={ store }>
            <StaticRouter context={ {} } location={ req.url }>
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
    const { title }           = Helmet.renderStatic();

    res.render('index', {
        html,
        storage,
        scriptTags,
        styleChunksTags,
        styleComponentsTags,
        title: title.toString(),
    });
}

module.exports = serverSideRendering;
