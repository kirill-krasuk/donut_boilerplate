import { handleActions } from 'redux-actions';

import * as actions      from '@core/actions/modal';
import { State, Action } from './types';

export const initState: State = {
    id        : null,
    hasHistory: false
};

export default handleActions<State, Action>({
    [actions.SET_MODAL]: (state, action) => ({
        ...state,
        id: action.payload
    }),
    [actions.SET_MODAL_HISTORY_FLAG]: (state, action) => ({
        ...state,
        hasHistory: action.payload
    })
}, initState);
