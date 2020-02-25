import { handleActions } from 'redux-actions';

import * as actions      from '@core/actions/locale';
import { ELocale }       from '@core/enums/locale';
import { Action, State } from './types';

export const initState: State = ELocale.En;

export default handleActions<State, Action>({
    [actions.CHANGE_LOCALE]: (_state, action) => action.payload
}, initState);
