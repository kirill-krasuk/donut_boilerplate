import loadable from '@loadable/component';

export const Home = loadable(
    () => import(/* webpackChunkName: "Home" */'./ui/Home'),
    {
        fallback: <div>Loading...</div>
    }
);
