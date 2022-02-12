import loadable from '@loadable/component';

export default loadable(
    () => import(/* webpackChunkName: "Button" */'./component'),
    {
        fallback: <div>Loading..</div>
    }
);
