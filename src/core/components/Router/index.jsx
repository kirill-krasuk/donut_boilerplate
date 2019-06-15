import React                       from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { renderRoutes }            from 'react-router-config';

import history                     from 'core/utils/history';
import routes                      from './routes';

const Router = () => (
    <BrowserRouter history={ history }>
        { renderRoutes(routes) }
    </BrowserRouter>
);

export default Router;
