import loadable from '@loadable/component';

export const Image = loadable(
    () => import(/* webpackChunkName: "Image" */'./Image'),
    {
        fallback: <div>Loading...</div>
    }
);

export const LazyImage = loadable(
    () => import(/* webpackChunkName: "LazyImage" */'./LazyImage'),
    {
        fallback: <div>Loading...</div>
    }
);
