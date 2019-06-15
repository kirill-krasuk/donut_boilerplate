const React              = require('react');
const { renderToString } = require('react-dom/server');
const { renderRoutes }   = require('react-router-config');
const { StaticRouter }   = require('react-router');

const routes = require('core/components/Router/routes').default;

function serverSideRendering(req, res) {
    res.set('Service-Worker-Allowed', '/');

    const App = () => (
        <StaticRouter context={ {} } location={ req.url }>
            { renderRoutes(routes) }
        </StaticRouter>
    );

    const markup = renderToString(<App />);

    res.render('index', {
        markup,
    });
}

module.exports = serverSideRendering;
