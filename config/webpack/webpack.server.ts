import webpack, { Configuration }    from 'webpack';
import { WebpackPnpExternals }       from 'webpack-pnp-externals';
import SpeedMeasurePlugin            from 'speed-measure-webpack-plugin';

import { TsconfigPathsPlugin }       from 'tsconfig-paths-webpack-plugin';
import { getJsLoader }               from './loaders/js-loader';
import { getServerImageLoader }      from './loaders/image-loader';
import { getFontsLoader }            from './loaders/font-loader';
import { getServerCssLoader }        from './loaders/css-loader';
import { getServerSassLoader }       from './loaders/sass-loader';
import { getSVGLoader }              from './loaders/svg-loader';
import { getServerSassModuleLoader } from './loaders/sass-module-loader';
import { isProd }                    from './utils/isProd';
import { getEnvs }                   from './utils/getEnvs';
import { paths }                     from './constants/path';

const smp = new SpeedMeasurePlugin();

const mode            = process.env.NODE_ENV as 'development' | 'production' || 'development';
const useSpeedMeasure = JSON.parse(process.env.USE_SPEED_MEASURE_SERVER || 'false');

export const __IS_SERVER__ = true;
export const __IS_CLIENT__ = false;

const config: Configuration = {
    mode,
    target: 'node',
    entry : paths.server.entry,
    node  : {
        __dirname : true,
        __filename: false
    },
    output: {
        path      : paths.server.output,
        filename  : 'server.js',
        publicPath: '/dist/',
    },
    cache: !isProd()
        ? {
            type          : 'filesystem',
            name          : 'server-cache',
            cacheDirectory: paths.cacheDir
        }
        : false,
    stats  : 'summary',
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.css',
            '.sass',
            '.json'
        ],
        symlinks        : false,
        cacheWithContext: false,
        plugins         : [
            new TsconfigPathsPlugin({
                configFile: paths.tsconfig
            })
        ]
    },
    module: {
        rules: [
            getJsLoader(),
            getServerCssLoader(),
            getServerSassLoader(),
            getServerSassModuleLoader(),
            getServerImageLoader(),
            getSVGLoader(),
            getFontsLoader()
        ]
    },
    externals: [ WebpackPnpExternals() ],
    plugins  : [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(mode), ...getEnvs() },
            __IS_DEV__   : mode === 'development',
            __IS_PROD__  : mode === 'production',
            __IS_SERVER__,
            __IS_CLIENT__
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ]
};

export default useSpeedMeasure
    ? smp.wrap(config)
    : config;
