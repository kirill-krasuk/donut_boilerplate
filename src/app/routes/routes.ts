export const routes = {
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
