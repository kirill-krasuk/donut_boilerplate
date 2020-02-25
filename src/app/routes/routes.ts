import { returnTypedObject } from '@core/utils/object';

const routes = returnTypedObject({
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
});

export const protectRedirect = routes.home.path;

export default routes;
