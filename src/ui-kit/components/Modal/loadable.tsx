import React    from 'react';
import loadable from '@loadable/component';

export default loadable(
    () => import(/* webpackChunkName: "Modal" */'.'),
    {
        fallback: <div>Loading...</div>
    }
);
