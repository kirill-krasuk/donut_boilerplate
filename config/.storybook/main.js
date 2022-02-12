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
    staticDirs: [path.resolve('public')],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'babel-loader',
                },
            ],
        }, {
            test: /\.modules?\.(s(a|c)ss)$/,
            use: [
                'style-loader', 
                {
                    loader : 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    }
                },
                'resolve-url-loader',
                'sass-loader'
            ],
            include: path.resolve(__dirname, '../../'),
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
