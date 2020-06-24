const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
        'storybook-addon-react-docgen'
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: 'babel-loader',
                },
                {
                    loader: 'react-docgen-typescript-loader',
                    options: {
                        tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
                    },
                },
            ],
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};