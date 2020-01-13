const { matchRoutes } = require('react-router-config');

const routes = require('core/components/Router/routes').default;

export async function prefetch(store, url, auth = null) {
    const [ pathname, query ] = url.split('?');
    const [ , appRoute ]      = matchRoutes(routes, pathname);

    if (appRoute && appRoute.route) {
        const { route, match } = appRoute;
        const { component }    = route;

        if (component.prefetch) {
            try {
                await component.prefetch(store, { params: match.params, query }, auth);
            } catch (err) {
                // eslint-disable-next-line
                console.log(err);
            }
        }
    }
}
