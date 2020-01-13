// @flow

import React                  from 'react';
import type { ComponentType } from 'react';
import loadable               from '@loadable/component';

import type { PropsType }     from '.';

const component: ComponentType<PropsType> = loadable(
    () => import(/* webpackChunkName: "Modal" */'.'),
    {
        fallback: <div>Loading...</div>
    }
);

export default component;
