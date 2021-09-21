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
            loader : require.resolve('babel-loader'),
            options: {
                compact: false
            }
        } ],
        exclude: [ /\.(spec|test)\.js$/ ]
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
