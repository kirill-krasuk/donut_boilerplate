import { useRoutes }        from 'react-router-dom';

import { AppRoutes }        from '@pages/index';

import { RootView }         from './root-view';

import type { RouteObject } from 'react-router-dom';

const root = {
	path    : '/',
	element : <RootView />,
	children: AppRoutes
};

const routes: RouteObject[] = [ root ];

const Routes = () => useRoutes(routes);

export { routes, Routes };
