import { createReducer } from 'typesafe-actions';

import * as actions      from '@core/store/actions/locale';
import { Locale }        from '@core/enums/locale';
import { Action, State } from './types';

export const initState: State = Locale.En;

export default createReducer<State, Action>(initState, {
    [actions.CHANGE_LOCALE]: (_state, { payload }) => payload
});
