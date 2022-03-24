import loadable            from '@loadable/component';

import { createRoutePage } from '@lib/react';

const Page404 = loadable(
    () => import(/* webpackChunkName: "Home" */'./ui/Page404'),
    {
        fallback: <div>Loading...</div>
    }
);

export default createRoutePage({
    routeName: 404,
    component: Page404
});
