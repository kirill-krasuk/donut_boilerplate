import React    from 'react';
import loadable from '@loadable/component';

export default loadable(
    () => import(/* webpackChunkName: "Header" */'./component'),
    {
        fallback: <div>Loading...</div>
    }
);
