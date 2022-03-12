import { RouteObject, useRoutes } from 'react-router';

import { AppRoutes }              from '@pages/index';
import { RootView }               from './root-view';

export const routes: RouteObject[] = [ {
    path    : '/',
    element : <RootView />,
    children: AppRoutes
} ];

export const Routes = () => useRoutes(routes);
