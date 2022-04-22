import { RouteObject, useRoutes } from 'react-router';

import { AppRoutes }              from '@pages/index';

import { RootView }               from './root-view';

const routes: RouteObject[] = [
	{
		path    : '/',
		element : <RootView />,
		children: AppRoutes,
	},
];

const Routes = () => useRoutes(routes);

export { routes, Routes };
