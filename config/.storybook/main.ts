/* eslint-disable import/no-import-module-exports */
import webpack                 from 'webpack';
import path                    from 'node:path';

import { paths }               from '../shared/constants/paths';
import { jsLoader }            from '../shared/loaders/js-loader';
import { cssLoader }           from '../shared/loaders/css-loader';
import { cssModuleLoader }     from '../shared/loaders/css-module-loader';
import { sassModuleLoader }    from '../shared/loaders/sass-module-loader';
import { sassLoader }          from '../shared/loaders/sass-loader';
import { tsconfigPathsPlugin } from '../shared/plugins/tsconfig-paths';

const styleProps = {
    enablePerf      : false,
    forceStyleLoader: true
};

export default {
    core: {
        builder: 'webpack5',
    },
    stories: [ paths.stories ],
    addons : [
        '@storybook/addon-knobs',
        '@storybook/addon-storysource',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@geometricpanda/storybook-addon-badges',
        {
            name   : '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
    ],
    staticDirs  : [ path.resolve('public') ],
    webpackFinal: async (config: webpack.Configuration) => {
        // find and remove css rule to overwrite
        // custom and they do not conflict
        const cssRuleIndex = config!.module!.rules?.findIndex(
            (rule: any) => rule.test.toString() === /\.css$/.toString()
        );

        if (cssRuleIndex) {
            config!.module!.rules?.splice(cssRuleIndex, 1);
        }

        // eslint-disable-next-line no-param-reassign
        config.context = paths.context;
        config!.module!.rules!.push(
            jsLoader({
                enableThread: false,
                enableCache : false
            }),

            cssLoader(styleProps).client,

            cssModuleLoader(styleProps).client,

            sassLoader(styleProps).client,

            sassModuleLoader({
                ...styleProps,
                extraOptions: {
                    include: path.resolve(__dirname, '../../'),
                }
            }).client
        );

        config!.resolve!.extensions!.push('.ts', '.tsx');
        // eslint-disable-next-line no-param-reassign
        config!.resolve!.plugins = [ tsconfigPathsPlugin() ];

        return config;
    },
};
