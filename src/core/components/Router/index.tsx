import React               from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes }    from 'react-router-config';

import routes              from './routes';
import { PropsType } from './types';

const Router: React.FC<PropsType> = (props): JSX.Element => {
    const { history } = props;

    return (
        <ConnectedRouter history={ history }>
            { renderRoutes(routes) }
        </ConnectedRouter>
    );
};

export default Router;
