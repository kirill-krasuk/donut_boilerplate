import loadable from '@loadable/component';

export const Posts = loadable(
    () => import(/* webpackChunkName: "Posts" */'./ui/Posts'),
    {
        fallback: <div>Loading...</div>
    }
);
