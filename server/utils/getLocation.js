// @flow
const { matchRoutes } = require('react-router-config');

const { protectRedirect } = require('app/routes/routes');
const routes              = require('core/components/Router/routes').default;

export function getLocation(isLogged: boolean, url: string): string {
    const [ pathname ]   = url.split('?');
    const [ , appRoute ] = matchRoutes(routes, pathname);

    if (appRoute && appRoute.route) {
        const { route } = appRoute;

        if (!isLogged && route.protect) {
            return protectRedirect;
        }

        return url;
    }
}
