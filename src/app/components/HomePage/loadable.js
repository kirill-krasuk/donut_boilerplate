import React    from 'react';
import loadable from '@loadable/component';

export default loadable(() => import(/* webpackChunkName: "Home" */'.'), {
    fallback: <div>Loading...</div>
});
