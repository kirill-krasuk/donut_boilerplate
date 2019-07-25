const path = require('path');

const { getJsLoader }         = require('./webpack/loaders/js-loader');
const { getCssLoader }        = require('./webpack/loaders/css-loader');
const { getSassLoader }       = require('./webpack/loaders/sass-loader');
const { getSassModuleLoader } = require('./webpack/loaders/sass-module-loader');

module.exports = {
    webpackConfig: {
        resolveLoader: {
            moduleExtensions: [ '-loader' ]
        },
        module: {
            rules: [
                getJsLoader(false),
                getCssLoader(false),
                getSassLoader(false),
                getSassModuleLoader(false),
            ]
        }
    },
    styleguideComponents: {
        Wrapper: path.resolve(__dirname, 'src/core/styleguide/Wrapper')
    },
    components: 'src/ui/components/**/*.jsx'
};
