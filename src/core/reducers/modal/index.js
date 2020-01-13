// @flow

import { handleActions }              from 'redux-actions';

import * as actions                   from 'core/actions/modal';
import type { StateType, ActionType } from './types';

export const initState: StateType = {
    id        : null,
    hasHistory: false
};

export default handleActions<StateType, ActionType>({
    [actions.SET_MODAL]: (state, action) => ({
        ...state,
        id: action.payload
    }),
    [actions.SET_MODAL_HISTORY_FLAG]: (state, action) => ({
        ...state,
        hasHistory: action.payload
    })
}, initState);
