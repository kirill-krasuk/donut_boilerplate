import loadable            from '@loadable/component';

import { createRoutePage } from '@lib/react';

const Home = loadable(
    () => import(/* webpackChunkName: "Home" */'./ui/Home'),
    {
        fallback: <div>Loading...</div>
    }
);

export default createRoutePage({
    routeName: 'home',
    component: Home
});
