import { isProd } from '../utils/isProd';

export function getJsLoader() {
    const jsLoader: Record<string, any> = {
        test: /\.(j|t)s(x)?$/,
        use : [ {
            loader : 'thread-loader',
            options: {
                workers           : 2,
                workerParallelJobs: 50,
            }
        }, {
            loader: 'babel-loader'
        } ],
        exclude: [ /node_modules/, /\.(spec|test)\.js$/ ]
    };

    if (!isProd()) {
        jsLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/js-cache'
            }
        });
    }

    return jsLoader;
}
