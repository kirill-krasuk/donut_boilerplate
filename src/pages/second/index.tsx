import loadable            from '@loadable/component';

import { createRoutePage } from '@lib/react';

const Second = loadable(
    () => import(/* webpackChunkName: "Second", webpackPrefetch: true */'./ui/Second'),
    {
        fallback: <div>Loading...</div>
    }
);

export default createRoutePage({
    routeName: 'second',
    component: Second,
});
