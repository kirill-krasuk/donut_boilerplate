import loadable from '@loadable/component';

export const Modal = loadable(
    () => import(/* webpackChunkName: "Modal" */'./Modal'),
    {
        fallback: <div>Loading...</div>
    }
);
