// @flow

import { handleActions }              from 'redux-actions';

import * as actions                   from '@core/actions/locale';
import { ActionType, StateType } from './types';

export const initState: StateType = 'en';

export default handleActions<StateType, ActionType>({
    [actions.CHANGE_LOCALE]: (_state, action) => action.payload
}, initState);
