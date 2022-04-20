import { createReducer } from '@reduxjs/toolkit';

import { Locale }        from '../../types/enums';

import { changeLocale }  from './actions';

const initialState = Locale.En;

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeLocale, (_state, action) => action.payload);
});

export {
    initialState,
    reducer
};
