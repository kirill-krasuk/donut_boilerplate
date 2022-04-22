import { useLocation, matchRoutes, useNavigate } from 'react-router';

import { AppRoutes }                             from '@pages/index';
import { protectRedirect, routes as appRoutes }  from '@config/routes';

import type { Context }                          from '@shared/types/client-server';
import type { AppRouteObject }                   from '../types';

const redirect = (serverContext: Context | undefined, status: number, to: string): void => {
	/* eslint-disable no-param-reassign */
	if (serverContext) {
		serverContext.status = status;
		serverContext.to     = to;
	}
};

function useRedirect(context?: Context): void {
	const location = useLocation();
	const navigate = useNavigate();

	const matchedRoutes = matchRoutes(AppRoutes, location.pathname);

	if (matchedRoutes) {
		const [ matchedRoute ]: AppRouteObject[] = matchedRoutes;

		if (matchedRoute.route.path === '*') {
			redirect(context, 404, appRoutes[404].path);
		}

		if (matchedRoute.route.protect) {
			redirect(context, 301, protectRedirect);

			navigate(protectRedirect, { replace: true });
		}
	}
}

export { useRedirect };
