import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { hot }                      from 'react-hot-loader/root';

import Router                       from 'core/components/Router';

const App: ComponentType<{}> = (): Node => (
    <Router />
);

export default hot(App);
