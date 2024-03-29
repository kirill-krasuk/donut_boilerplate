import { routes } from '@config/routes';

import type {
	RouteByNamePageOptions,
	RouteByPropsPageOptions,
	RouteExtendedObject
} from '../../types/builder';
import type { PC } from '../../types/components';

const isRouteFactory = (options: any): options is RouteByNamePageOptions =>
	Reflect.has(options, 'routeName');

const defaultRouteProps = {
	protect: false
};

function createRoutePage(options: RouteByPropsPageOptions): RouteExtendedObject;
function createRoutePage(options: RouteByNamePageOptions): RouteExtendedObject;
function createRoutePage(options: any): any {
	if (isRouteFactory(options)) {
		const { routeName, component: Component, prefetch } = options;

		if (prefetch) {
			(Component as PC).prefetch = prefetch;
		}

		if (routeName) {
			const routeProps = {
				...defaultRouteProps,
				...routes[routeName]
			};

			return {
				...routeProps,
				element: <Component />
			};
		}
	} else {
		const {
			component: Component,
			prefetch,
			path,
			protect = false
		} = options;

		if (prefetch) {
			(Component as PC).prefetch = prefetch;
		}

		return {
			path,
			protect,
			element: <Component />
		};
	}
}

export { createRoutePage };
