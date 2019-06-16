import React    from 'react';
import loadable from '@loadable/component';

export default loadable(() => import(/* webpackChunkName: "Home", webpackPrefetch: true */'.'), {
    fallback: <div>Loading...</div>
});
