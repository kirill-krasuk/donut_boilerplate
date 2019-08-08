// @flow
import { handleActions }              from 'redux-actions';

import * as actions                   from 'core/actions/theme';
import type { StateType, ActionType } from './types';

export const initState: StateType = {
    mode: 'light'
};

export default handleActions<StateType, ActionType>({
    [actions.CHANGE_THEME]: (state, action) => ({
        ...state,
        mode: action.payload
    })
}, initState);
