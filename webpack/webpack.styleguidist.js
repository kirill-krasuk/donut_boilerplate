const { getJsLoader }         = require('./loaders/js-loader');
const { getCssLoader }        = require('./loaders/css-loader');
const { getSassLoader }       = require('./loaders/sass-loader');
const { getSassModuleLoader } = require('./loaders/sass-module-loader');
const { getSVGLoader }        = require('./loaders/svg-loader');

module.exports = {
    resolveLoader: {
        moduleExtensions: [ '-loader' ]
    },
    module: {
        rules: [
            getJsLoader(false),
            getCssLoader(false),
            getSassLoader(false),
            getSassModuleLoader(false),
            getSVGLoader(false)
        ]
    }
};
