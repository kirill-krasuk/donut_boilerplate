import { handleActions } from 'redux-actions';

import * as actions      from '@core/actions/location';
import { State, Action } from './types';

const initState: State = {
    isFirstRendering: true
};

export default handleActions<State, Action>({
    [actions.IS_FIRST_RENDERING]: (state, action) => ({
        ...state,
        isFirstRendering: action.payload
    })
}, initState);
