import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { Router }                   from 'react-router-dom';
import { renderRoutes }             from 'react-router-config';

import history                      from 'core/utils/history';
import routes                       from './routes';

const RouterContainer: ComponentType<{}> = (): Node => (
    <Router history={ history }>
        { renderRoutes(routes) }
    </Router>
);

export default RouterContainer;
