import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router';
import { History }         from 'history';

import appReducers         from '@app/reducers';
import { Action }          from '@core/types/actions';
import theme               from './theme';
import locale              from './locale';
import modal               from './modal';
import location            from './location';

export const staticReducers = {
    router: connectRouter({} as any),
    theme,
    locale,
    modal,
    location,
    ...appReducers
};

const appReducer = (history: History<any>, asyncReducers = {}, ssrReducers = {}): Function => combineReducers({
    ...staticReducers,
    router: connectRouter(history),
    ...asyncReducers,
    ...ssrReducers
});

export default (
    history: History<any>,
    asyncReducers?: Record<string, any>,
    ssrReducers?: Record<string, any>
): Function => (state: Record<string, any>, action: Action): Function => {
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
