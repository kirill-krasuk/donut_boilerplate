import { matchRoutes }      from 'react-router';

import { routes }           from '@core/components/Router/RootRoute';
import { RouteForPrefetch } from '@shared/types/components';

export async function prefetch(url: string, auth: any = null) {
    const [ pathname, query ] = url.split('?');

    /**
     * appRoute on first element in array
     * because zero element is Root Wrapper Component
     */
    const [ , appRoute ] = matchRoutes(routes, pathname)!;

    if (appRoute && appRoute.route) {
        const { route }   = appRoute;
        const { element } = route as RouteForPrefetch;

        if (element.type.prefetch) {
            const data = await element.type.prefetch({ query }, auth);

            return data;
        }
    }

    return {};
}
