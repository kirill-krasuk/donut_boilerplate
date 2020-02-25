import { handleActions }   from 'redux-actions';

import * as actions        from '@core/actions/modal';
import { State, Payloads } from './types';

export const initState: State = {
    id        : '',
    hasHistory: false
};

export default handleActions<State, Payloads>({
    [actions.SET_MODAL]: (state, action) => ({
        ...state,
        id: action.payload
    }),
    [actions.SET_MODAL_HISTORY_FLAG]: (state, action) => ({
        ...state,
        hasHistory: action.payload
    })
}, initState);
