import { RoutesType } from '@core/types/routes';

const routes: RoutesType = {
    home: {
        path: '/',
    },
    second: {
        path: '/second'
    },
    protect: {
        path   : '/protect',
        protect: true
    },
    404: {
        path: '*',
    }
};

export const protectRedirect = routes.home.path;

export default routes;
