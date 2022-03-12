import { RouteObject, useRoutes } from 'react-router';

import Root                       from '@app/components/Root';
import { AppRoutes }              from '@pages/index';

export const routes: RouteObject[] = [ {
    path    : '/',
    element : <Root />,
    children: AppRoutes
} ];

const Routes = () => useRoutes(routes);

export default Routes;
