// @flow

// eslint-disable-next-line no-unused-vars
export const checkAuth = (cookie, res, store) => {
    const isLogged = JSON.parse(cookie.is_logged || 'false');

    if (!cookie.auth_token && isLogged) {
        // store.dispatch(setUserAction({ isLogged: false }));
        res.cookie('is_logged', false);
    } else if (cookie.auth_token && !isLogged) {
        // store.dispatch(setUserAction({ isLogged: true }));
        res.cookie('is_logged', true);
    } else if (cookie.auth_token && isLogged) {
        // store.dispatch(setUserAction({ isLogged: true }));
        res.cookie('is_logged', true);
    } else {
        // store.dispatch(setUserAction({ isLogged: false }));
        res.cookie('is_logged', false);
    }

    return isLogged;
};
