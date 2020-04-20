import { createReducer } from 'typesafe-actions';
import { Lens }          from 'monocle-ts';

import * as actions      from '@core/actions/theme';
import { ETheme }        from '@core/enums/theme';
import { State, Action } from './types';

export const initState: State = {
    mode: ETheme.Light
};

const themeLens = Lens.fromProp<State>()('mode');

export default createReducer<State, Action>(initState, {
    [actions.CHANGE_THEME]: (state, { payload }) => (
        themeLens
            .set(payload)(state)
    )
});
