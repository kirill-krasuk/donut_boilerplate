import { fileExtensions } from '../constants/files';
import { isProd }         from '../utils/isProd';

export const getJsLoader = () => ({
    test: fileExtensions.js,
    use : [
        !isProd() && {
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/js-cache'
            }
        },

        {
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
        }
    ].filter(Boolean),
    exclude: [ fileExtensions.tests ]
});
