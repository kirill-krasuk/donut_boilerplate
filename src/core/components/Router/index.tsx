import { FC }              from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes }    from 'react-router-config';

import routes              from './routes';
import { Props }           from './types';

const Router: FC<Props> = (props) => {
    const { history } = props;

    return (
        <ConnectedRouter history={ history }>
            { renderRoutes(routes) }
        </ConnectedRouter>
    );
};

export default Router;
