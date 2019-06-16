const React                                     = require('react');
const { renderToString }                        = require('react-dom/server');
const { renderRoutes }                          = require('react-router-config');
const { StaticRouter }                          = require('react-router');
const { ChunkExtractor, ChunkExtractorManager } = require('@loadable/server');
const path                                      = require('path');

const routes = require('core/components/Router/routes').default;

const statsFile = path.resolve(__dirname, '../../dist/loadable-stats.json');

function serverSideRendering(req, res) {
    res.set('Service-Worker-Allowed', '/');

    const extractor = new ChunkExtractor({ statsFile, entrypoints: [ 'bundle' ] });

    const App = () => (
        <StaticRouter context={ {} } location={ req.url }>
            <ChunkExtractorManager extractor={ extractor }>
                { renderRoutes(routes) }
            </ChunkExtractorManager>
        </StaticRouter>
    );

    const html = renderToString(<App />);

    const scriptTags = extractor.getScriptTags();

    res.render('index', {
        html,
        scriptTags
    });
}

module.exports = serverSideRendering;
