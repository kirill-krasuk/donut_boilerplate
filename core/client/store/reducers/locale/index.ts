import { createReducer } from 'typesafe-actions';

import * as actions      from '@client/store/actions/locale';
import { Locale }        from '@app/enums/locale';
import { Action, State } from './types';

export const initState: State = Locale.En;

export default createReducer<State, Action>(initState, {
    [actions.changeLocaleAction.type]: (_state, { payload }) => payload
});
