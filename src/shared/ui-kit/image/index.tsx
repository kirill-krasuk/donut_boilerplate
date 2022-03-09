import loadable from '@loadable/component';

export const Image = loadable(
    () => import(/* webpackChunkName: "Image" */'./Image'),
    {
        fallback: <div>Loading...</div>
    }
);
