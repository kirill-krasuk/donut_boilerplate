import { combineReducers } from '@reduxjs/toolkit';

import appReducers         from '@app/store/reducers';

export const staticReducers = appReducers;

const appReducer = (asyncReducers = {}, ssrReducers = {}) => combineReducers({
    ...staticReducers,
    ...asyncReducers,
    ...ssrReducers
});

export default (
    asyncReducers?: Record<string, any>,
    ssrReducers?: Record<string, any>
): ReturnType<typeof appReducer> => (state, action) => {
    // this place need for unset state on logout
    if (action.type === 'LOGOUT') {
        // @ts-expect-error
        // eslint-disable-next-line no-param-reassign
        state = {
            ...state,

            // user: undefined
        };
    }

    return appReducer(asyncReducers, ssrReducers)(state, action);
};
