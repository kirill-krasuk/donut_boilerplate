import { combineReducers } from 'redux';

import appReducers         from '@app/store/reducers';
import theme               from './theme';
import locale              from './locale';
import modal               from './modal';
import location            from './location';

export const staticReducers = {
    theme,
    locale,
    modal,
    location,
    ...appReducers
};

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
    // @ts-ignore
    if (action.type === 'LOGOUT') {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        state = {
            ...state,

            // user: undefined
        };
    }

    return appReducer(asyncReducers, ssrReducers)(state, action);
};