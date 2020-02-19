import { matchRoutes } from 'react-router-config';

import { PComponent }  from '@core/types/components';
import routes          from '@core/components/Router/routes';

export async function prefetch(store: Record<string, any>, url: string, auth: any = null): Promise<void> {
    const [ pathname, query ] = url.split('?');
    const [ , appRoute ]      = matchRoutes(routes, pathname);

    if (appRoute && appRoute.route) {
        const { route, match } = appRoute;
        const { component }    = route;

        const pComponent = (component as PComponent);

        if (pComponent.prefetch) {
            try {
                await pComponent.prefetch(store, { params: match.params, query }, auth);
            } catch (err) {
                // eslint-disable-next-line
                console.log(err);
            }
        }
    }
}
