import React    from 'react';
import loadable from '@loadable/component';

const component = loadable(
    () => import(/* webpackChunkName: "Button" */'.'),
    {
        fallback: <div>Loading..</div>
    }
);

export default component;
