import React    from 'react';
import loadable from '@loadable/component';

export default loadable(
    () => import(/* webpackChunkName: "Image" */'.'),
    {
        fallback: <div>Loading...</div>
    }
);
