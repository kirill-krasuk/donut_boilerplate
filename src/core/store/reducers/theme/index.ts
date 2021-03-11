import { createReducer } from 'typesafe-actions';
import { Lens }          from 'monocle-ts';

import * as actions      from '@core/store/actions/theme';
import { Theme }         from '@core/enums/theme';
import { State, Action } from './types';

export const initState: State = {
    mode: Theme.Light
};

const themeLens = Lens.fromProp<State>()('mode');

export default createReducer<State, Action>(initState, {
    [actions.changeThemeAction.type]: (state, { payload }) => (
        themeLens
            .set(payload)(state)
    )
});
