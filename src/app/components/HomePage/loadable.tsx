import React                   from 'react';
import loadable                from '@loadable/component';

import { PrefetchedComponent } from '@core/types/components';
import prefetch                from './prefetch';
import { PropsType }           from './types';

const component = loadable(
    () => import(/* webpackChunkName: "Home" */'.'),
    {
        fallback: <div>Loading...</div>
    }
);

(component as PrefetchedComponent<PropsType>).prefetch = prefetch;

export default component;
