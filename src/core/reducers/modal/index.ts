import { createReducer }  from 'typesafe-actions';

import * as actions       from '@core/actions/modal';
import { State, Actions } from './types';

export const initState: State = {
    id        : null,
    hasHistory: false
};

export default createReducer<State, Actions>(initState, {
    [ actions.SET_MODAL ]: (state, { payload }) => ({
        ...state,
        id: payload
    }),
    [actions.SET_MODAL_HISTORY_FLAG]: (state, { payload }) => ({
        ...state,
        hasHistory: payload
    })
});
