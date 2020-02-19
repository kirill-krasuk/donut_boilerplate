const path = require('path');

const webpackConfig = require('./webpack/webpack.styleguidist');

module.exports = {
    webpackConfig,
    styleguideComponents: {
        Wrapper: path.resolve(__dirname, 'src/core/styleguide/Wrapper')
    },
    components : 'src/ui-kit/components/**/*.tsx',
    ignore     : [ '**/loadable.tx', '**/*.spec.tsx', '**/*.spec.ts' ],
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse
};
