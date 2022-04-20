import { createReducer } from '@reduxjs/toolkit';

import { ModalState }    from '../../types';
import { Modals }        from '../../types/enums';
import * as actions      from './actions';

const initialState: ModalState = {
    hasHistory: false,
    id        : null
};

function isModalId(value: any): value is Modals {
    return typeof value === 'string';
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.callModal, (state, action) => {
            if (isModalId(action.payload)) {
                state.id = action.payload;
            } else {
                state.hasHistory = action.payload.history;
                state.id         = action.payload.id;
            }
        })
        .addCase(actions.setModalHistoryFlag, (state, action) => {
            state.hasHistory = action.payload;
        });
});

export {
    initialState,
    reducer
};
