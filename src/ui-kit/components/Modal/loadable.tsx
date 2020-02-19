import React      from 'react';
import loadable   from '@loadable/component';

// import { PropsType }     from '.';

const component = loadable(
    () => import(/* webpackChunkName: "Modal" */'.'),
    {
        fallback: <div>Loading...</div>
    }
);

export default component;
