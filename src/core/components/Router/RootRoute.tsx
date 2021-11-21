import { useRoutes, RouteObject } from 'react-router';

import { Root }                   from '@app/components';
import appRoutes                  from '@app/routes';

export const routes: RouteObject[]  = [ {
    path    : '/',
    element : <Root />,
    children: appRoutes
} ];

const Routes = () => useRoutes(routes);

export default Routes;
