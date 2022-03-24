import { routes }                                                               from '@config/routes';
import { RouteByNamePageOptions, RouteExtendedObject, RouteByPropsPageOptions } from '../../types/builder';
import { PC }                                                                   from '../../types/components';

function isRouteFactory(options: any): options is RouteByNamePageOptions {
    return Reflect.has(options, 'routeName');
}

const defaultRouteProps = {
    protect: false
};

export function createRoutePage(options: RouteByPropsPageOptions): RouteExtendedObject;
export function createRoutePage(options: RouteByNamePageOptions): RouteExtendedObject;
export function createRoutePage(options: any): any {
    if (isRouteFactory(options)) {
        const {
            routeName,
            component: Component,
            prefetch,
        } = options;

        if (prefetch) {
            (Component as PC).prefetch = prefetch;
        }

        if (routeName && routes[routeName]) {
            const routeProps = { ...defaultRouteProps, ...routes[routeName] };

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
            protect = false,
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
