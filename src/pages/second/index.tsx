import loadable from '@loadable/component';

export const Second = loadable(
    () => import(/* webpackChunkName: "Second" */'./ui/Second'),
    {
        fallback: <div>Loading...</div>
    }
);
