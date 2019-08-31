module.exports = component => `// @flow
import React    from 'react';
import loadable from '@loadable/component';

export default loadable(() => import(/* webpackChunkName: "${ component.name }" */'.'), {
    fallback: <div>loading...</div>
});
`;
