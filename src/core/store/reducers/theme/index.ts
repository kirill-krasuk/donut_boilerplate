import { createReducer } from 'typesafe-actions';

import * as actions      from '@core/store/actions/theme';
import { Theme }         from '@app/enums/theme';
import { State, Action } from './types';

export const initState: State = {
    mode: Theme.Light
};

export default createReducer<State, Action>(initState, {
    [actions.changeThemeAction.type]: (state, { payload }) => ({
        ...state,
        mode: payload
    }),
    [actions.changePreferColorScheme.type]: (state, { payload }) => ({
        ...state,
        mode: payload
    })
});
