// @flow
import { handleActions }              from 'redux-actions';

import * as actions                   from 'core/actions/location';
import type { StateType, ActionType } from './types';

const initState: StateType = {
    isFirstRendering: true
};

export default handleActions<StateType, ActionType>({
    [actions.IS_FIRST_RENDERING]: (state, action) => ({
        ...state,
        isFirstRendering: action.payload
    })
}, initState);
