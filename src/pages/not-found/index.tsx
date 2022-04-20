import loadable                   from '@loadable/component';
import { createRoutePage }        from '@lib/react';

import type { PropsWithChildren } from 'react';

const Page404 = loadable<PropsWithChildren<unknown>>(
    () => import(/* webpackChunkName: "Home" */'./ui/Page404'),
    {
        fallback: <div>Loading...</div>
    }
);

export default createRoutePage({
    routeName: 404,
    component: Page404
});
