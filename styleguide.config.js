const path = require('path');

const webpackConfig = require('./webpack/webpack.styleguidist');

module.exports = {
    webpackConfig,
    styleguideComponents: {
        Wrapper: path.resolve(__dirname, 'src/core/styleguide/Wrapper')
    },
    components: 'src/ui/components/**/*.jsx'
};
