import { PropsWithChildren } from 'react';
import loadable              from '@loadable/component';

import { createRoutePage }   from '@lib/react';

const ProtectedPage = loadable<PropsWithChildren<unknown>>(
    () => import(/* webpackChunkName: "ProtectedPage" */'./ui/ProtectedPage'),
    {
        fallback: <div>Loading...</div>
    }
);

export default createRoutePage({
    routeName: 'protect',
    component: ProtectedPage
});
