import { useRoutes, RouteObject } from 'react-router';

import Root                       from '@client/components/Root';
import appRoutes                  from '@app/pages';

export const routes: RouteObject[] = [ {
    path    : '/',
    element : <Root />,
    children: appRoutes
} ];

const Routes = () => useRoutes(routes);

export default Routes;
