import { configureBundler } from './webpack.common';
import { paths }            from '../shared/constants/paths';
import { gzipPlugins }      from '../shared/plugins/gzip';
import { minimizerPlugins } from '../shared/plugins/minimizer';

export default configureBundler({
    mode : 'production',
    entry: {
        bundle: [
            `${ paths.client.entry }`,
        ]
    },
    stats      : 'detailed',
    performance: {
        hints            : false,
        maxEntrypointSize: 512_000,
        maxAssetSize     : 512_000
    },
    optimization: {
        minimize   : true,
        minimizer  : minimizerPlugins(),
        splitChunks: {
            chunks     : 'all',
            cacheGroups: {
                default: {
                    test              : /(react|redux)/g,
                    filename          : 'react-vendors.[contenthash:8].js',
                    chunks            : 'initial',
                    reuseExistingChunk: true,
                    priority          : -10
                },
                defaultVendors: {
                    test              : /.yarn/,
                    filename          : 'vendors.[contenthash:8].js',
                    chunks            : 'initial',
                    reuseExistingChunk: true,
                    priority          : -20
                }
            }
        },
    },
    plugins: gzipPlugins()
});
