import loadable from '@loadable/component';

export const Second = loadable(
    () => import(/* webpackChunkName: "Second", webpackPrefetch: true */'./ui/Second'),
    {
        fallback: <div>Loading...</div>
    }
);
