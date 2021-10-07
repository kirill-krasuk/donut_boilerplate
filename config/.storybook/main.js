const path = require('path');

module.exports = {
    stories: ['../../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-storysource',
        '@storybook/addon-actions',
        '@storybook/addon-postcss',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@geometricpanda/storybook-addon-badges',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: 'babel-loader',
                },
            ],
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
