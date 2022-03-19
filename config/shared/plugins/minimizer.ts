import webpack                 from 'webpack';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin            from 'terser-webpack-plugin';

export function minimizerPlugins(): webpack.WebpackPluginInstance[] {
    return [
        new TerserPlugin({
            parallel     : true,
            terserOptions: {
                compress       : true,
                mangle         : true,
                toplevel       : false,
                ie8            : false,
                keep_classnames: undefined,
                keep_fnames    : false,
                safari10       : false,
            },
        }),
        new OptimizeCssAssetsPlugin()
    ];
}
