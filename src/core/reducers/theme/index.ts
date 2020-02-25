import { handleActions } from 'redux-actions';

import * as actions      from '@core/actions/theme';
import { ETheme }        from '@core/enums/theme';
import { State, Action } from './types';


export const initState: State = {
    mode: ETheme.Light
};

export default handleActions<State, Action>({
    [actions.CHANGE_THEME]: (state, action) => ({
        ...state,
        mode: action.payload
    })
}, initState);
