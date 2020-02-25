import { createReducer } from 'typesafe-actions';

import * as actions      from '@core/actions/theme';
import { ETheme }        from '@core/enums/theme';
import { State, Action } from './types';


export const initState: State = {
    mode: ETheme.Light
};

export default createReducer<State, Action>(initState, {
    [actions.CHANGE_THEME]: (state, action) => ({
        ...state,
        mode: action.payload
    })
});
