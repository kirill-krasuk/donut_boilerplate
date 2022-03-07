import { createReducer }                        from '@reduxjs/toolkit';

import { changeTheme, changePreferColorScheme } from './actions';
import { Theme }                                from '../../types/enums';

export const initialState = {
    mode: Theme.Light
};

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeTheme, (state, action) => { state.mode = action.payload; })
        .addCase(changePreferColorScheme, (state, action) => { state.mode = action.payload; });
});
