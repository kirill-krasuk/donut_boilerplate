import { createReducer }                        from '@reduxjs/toolkit';
import { Theme }                                from '@config/theme';

import { changeTheme, changePreferColorScheme } from './actions';

const initialState = {
    mode: Theme.Light
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeTheme, (state, action) => { state.mode = action.payload; })
        .addCase(changePreferColorScheme, (state, action) => { state.mode = action.payload; });
});

export {
    initialState,
    reducer
};
