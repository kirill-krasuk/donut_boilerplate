import { useRoutes, RouteObject } from 'react-router';

import Root                       from '@client/components/Root';
import { AppRoutes }              from '@pages/index';

export const routes: RouteObject[] = [ {
    path    : '/',
    element : <Root />,
    children: AppRoutes
} ];

const Routes = () => useRoutes(routes);

export default Routes;
