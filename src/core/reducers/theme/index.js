// @flow
import { handleActions }              from 'redux-actions';

import { CHANGE_THEME }               from 'core/actions/theme';
import type { StateType, ActionType } from './types';

const initState = {
    mode: 'light'
};

export default handleActions<StateType, ActionType>({
    [CHANGE_THEME]: (state, action) => ({
        ...state,
        mode: action.payload
    })
}, initState);
