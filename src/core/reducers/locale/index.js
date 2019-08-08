// @flow
import { handleActions }              from 'redux-actions';

import * as actions                   from 'core/actions/locale';
import type { ActionType, StateType } from './types';

export const initState: StateType = 'en';

export default handleActions<StateType, ActionType>({
    [actions.CHANGE_LOCALE]: (state, action) => action.payload
}, initState);
