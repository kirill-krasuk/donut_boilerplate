import loadable from '@loadable/component';

export const ProtectedPage = loadable(
    () => import(/* webpackChunkName: "ProtectedPage" */'./ui/ProtectedPage'),
    {
        fallback: <div>Loading...</div>
    }
);
