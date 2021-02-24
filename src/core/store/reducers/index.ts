import { combineReducers, Action } from 'redux';
import { connectRouter }           from 'connected-react-router';
import { History }                 from 'history';

import appReducers                 from '@app/store/reducers';
import theme                       from './theme';
import locale                      from './locale';
import modal                       from './modal';
import location                    from './location';

export const staticReducers = {
    router: connectRouter({} as any),
    theme,
    locale,
    modal,
    location,
    ...appReducers
};

const appReducer = (history: History<any>, asyncReducers = {}, ssrReducers = {}) => combineReducers({
    ...staticReducers,
    router: connectRouter(history),
    ...asyncReducers,
    ...ssrReducers
});

export default (
    history: History<any>,
    asyncReducers?: Record<string, any>,
    ssrReducers?: Record<string, any>
): ReturnType<typeof appReducer> => (state, action: Action) => {
    // this place need for unset state on logout
    if (action.type === 'LOGOUT') {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        state = {
            ...state,

            // user: undefined
        };
    }

    return appReducer(history, asyncReducers, ssrReducers)(state, action);
};
