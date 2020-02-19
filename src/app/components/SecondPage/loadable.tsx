import React    from 'react';
import loadable from '@loadable/component';

const component = loadable(
    () => import(/* webpackChunkName: "Second" */'.'),
    {
        fallback: <div>Loading...</div>
    }
);

export default component;
