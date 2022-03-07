import { createReducer } from '@reduxjs/toolkit';

import { changeLocale }  from './actions';
import { Locale }        from '../../types/enums';

export const initialState = Locale.En;

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeLocale, (_state, action) => action.payload);
});
