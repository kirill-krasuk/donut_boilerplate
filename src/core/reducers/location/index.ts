import { createReducer } from 'typesafe-actions';

import * as actions      from '@core/actions/location';
import { State, Action } from './types';

const initState: State = {
    isFirstRendering: true
};

export default createReducer<State, Action>(initState, {
    [actions.IS_FIRST_RENDERING]: (state, action) => ({
        ...state,
        isFirstRendering: action.payload
    })
});
