import loadable from '@loadable/component';

export default loadable(
    () => import(/* webpackChunkName: "Image" */'./component'),
    {
        fallback: <div>Loading...</div>
    }
);
