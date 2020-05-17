import { Store }                    from 'redux';
import { matchRoutes, RouteConfig } from 'react-router-config';
import * as C                       from 'fp-ts/lib/Console';

import { PComponent }               from '@core/types/components';
import routes                       from '@core/components/Router/routes';

export async function prefetch(store: Store, url: string, auth: any = null): Promise<void> {
    const [ pathname, query ] = url.split('?');
    const [ , appRoute ]      = matchRoutes(routes as RouteConfig[], pathname);

    if (appRoute && appRoute.route) {
        const { route, match } = appRoute;
        const { component }    = route;

        const pComponent = component as PComponent;

        if (pComponent.prefetch) {
            try {
                await pComponent.prefetch(store, { params: match.params, query }, auth)();
            } catch (err) {
                C.error(err)();
            }
        }
    }
}
