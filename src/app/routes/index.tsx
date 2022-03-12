import { RouteObject, useRoutes } from 'react-router';

import { AppRoutes }              from '@pages/index';
import RootView                   from './RootView';

export const routes: RouteObject[] = [ {
    path    : '/',
    element : <RootView />,
    children: AppRoutes
} ];

const Routes = () => useRoutes(routes);

export default Routes;
