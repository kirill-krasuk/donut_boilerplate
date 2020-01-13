// @flow

import React    from 'react';
import loadable from '@loadable/component';
import prefetch from './prefetch';

const component = loadable(
    () => import(/* webpackChunkName: "Home" */'.'),
    {
        fallback: <div>Loading...</div>
    }
);

component.prefetch = prefetch;

export default component;
