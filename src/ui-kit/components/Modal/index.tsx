import React    from 'react';
import loadable from '@loadable/component';

export default loadable(
    () => import(/* webpackChunkName: "Modal" */'./component'),
    {
        fallback: <div>Loading...</div>
    }
);
