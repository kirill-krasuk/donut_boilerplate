import { createReducer }  from 'typesafe-actions';

import * as actions       from '@client/store/actions/modal';
import { State, Actions } from './types';

export const initState: State = {
    id        : null,
    hasHistory: false
};

export default createReducer<State, Actions>(initState, {
    [actions.setModalAction.type]: (state, { payload }) => ({
        ...state,
        id: payload
    }),
    [actions.setModalHistoryFlagAction.type]: (state, { payload }) => ({
        ...state,
        hasHistory: payload
    })
});
