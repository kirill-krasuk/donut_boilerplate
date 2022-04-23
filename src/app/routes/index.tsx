import { RouteObject, useRoutes } from 'react-router';

import { AppRoutes }              from '@pages/index';

import { RootView }               from './root-view';

const root = {
	path    : '/',
	element : <RootView />,
	children: AppRoutes
};

const routes: RouteObject[] = [ root ];

const Routes = () => useRoutes(routes);

export { routes, Routes };
