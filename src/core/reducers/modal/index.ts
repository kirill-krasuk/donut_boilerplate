import { createReducer }  from 'typesafe-actions';
import { Lens }           from 'monocle-ts';
import * as O             from 'fp-ts/lib/Option';

import * as actions       from '@core/actions/modal';
import { State, Actions } from './types';

export const initState: State = {
    id        : null,
    hasHistory: false
};

const modalIdLens      = Lens.fromProp<State>()('id');
const modalHistoryLens = Lens.fromProp<State>()('hasHistory');

export default createReducer<State, Actions>(initState, {
    [ actions.SET_MODAL ]: (state, { payload }) => (
        modalIdLens
            .set(O.toNullable(payload))(state)
    ),
    [actions.SET_MODAL_HISTORY_FLAG]: (state, { payload }) => (
        modalHistoryLens
            .set(payload)(state)
    )
});
