import loadable from '@loadable/component';

const Image = loadable(
    () => import(/* webpackChunkName: "Image" */'./Image'),
    {
        fallback: <div>Loading...</div>
    }
);

const LazyImage = loadable(
    () => import(/* webpackChunkName: "LazyImage" */'./LazyImage'),
    {
        fallback: <div>Loading...</div>
    }
);

export {
    Image,
    LazyImage
};
