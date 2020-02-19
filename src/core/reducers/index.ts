import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router';

import appReducers         from '@app/reducers';
import theme               from './theme';
import locale              from './locale';
import modal               from './modal';
import location            from './location';

export const staticReducers = {
    router: connectRouter({}),
    theme,
    locale,
    modal,
    location,
    ...appReducers
};

const appReducer = (history, asyncReducers = {}, ssrReducers = {}): Function => combineReducers({
    ...staticReducers,
    router: connectRouter(history),
    ...asyncReducers,
    ...ssrReducers
});

export default (history, asyncReducers?, ssrReducers?): Function => (state, action): Function => {
    // this place need for unset state on logout
    if (action.type === 'LOGOUT') {
        // eslint-disable-next-line
        state = {
            ...state,

            // user: undefined
        };
    }

    return appReducer(history, asyncReducers, ssrReducers)(state, action);
};
