// @flow

import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { ConnectedRouter }          from 'connected-react-router';
import { renderRoutes }             from 'react-router-config';

import type { PropsType }           from './types';
import routes                       from './routes';

const Router: ComponentType<PropsType> = (props): Node => {
    const { history } = props;

    return (
        <ConnectedRouter history={ history }>
            { renderRoutes(routes) }
        </ConnectedRouter>
    );
};

export default Router;
