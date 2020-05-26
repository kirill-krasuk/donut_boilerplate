import React                         from 'react';
import { ConnectedRouter }           from 'connected-react-router';
import { renderRoutes, RouteConfig } from 'react-router-config';

import routes                        from './routes';
import { Props }                     from './types';

const Router: React.FC<Props> = (props) => {
    const { history } = props;

    return (
        <ConnectedRouter history={ history }>
            { renderRoutes((routes as RouteConfig[])) }
        </ConnectedRouter>
    );
};

export default Router;
