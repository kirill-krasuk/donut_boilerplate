import loadable from '@loadable/component';

export const Page404 = loadable(
    () => import(/* webpackChunkName: "Home" */'./ui/Page404'),
    {
        fallback: <div>Loading...</div>
    }
);
