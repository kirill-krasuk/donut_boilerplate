import { handleActions } from 'redux-actions';

import * as actions      from '@core/actions/theme';
import { State, Action } from './types';

export const initState: State = {
    mode: 'light'
};

export default handleActions<State, Action>({
    [actions.CHANGE_THEME]: (state, action) => ({
        ...state,
        mode: action.payload
    })
}, initState);
