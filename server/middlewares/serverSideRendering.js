const React              = require('react');
const { renderToString } = require('react-dom/server');

const App = require('core/components/App').default;

function serverSideRendering(req, res) {
    res.set('Service-Worker-Allowed', '/');

    const markup = renderToString(<App />);

    res.render('index', {
        markup,
    });
}

module.exports = serverSideRendering;
