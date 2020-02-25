import { createReducer } from 'typesafe-actions';

import * as actions      from '@core/actions/locale';
import { ELocale }       from '@core/enums/locale';
import { Action, State } from './types';

export const initState: State = ELocale.En;

export default createReducer<State, Action>(initState, {
    [actions.CHANGE_LOCALE]: (_state, action) => action.payload
});
