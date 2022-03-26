import { paths }           from '@server/constants/paths';
import { ONE_MONTH_CACHE } from '@server/constants/cache';

export const staticFiles = [
    {
        publicPath : '/dist',
        source     : paths.dist,
        compression: true
    },

    {
        publicPath : '/public',
        source     : paths.public,
        compression: true
    },

    {
        publicPath: '/sw.js',
        source    : paths.serviceWorker
    },

    {
        publicPath: '/images',
        source    : paths.images.static,
        extras    : { maxAge: ONE_MONTH_CACHE }
    },

    {
        publicPath: '/images/build',
        source    : paths.images.builded,
        extras    : { maxAge: ONE_MONTH_CACHE }
    },

    {
        publicPath: '/fonts/build',
        source    : paths.fonts,
        extras    : { maxAge: ONE_MONTH_CACHE }
    },

    {
        publicPath: '/',
        source    : paths.root,
    }
];
