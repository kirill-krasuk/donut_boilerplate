import { createReducer } from 'typesafe-actions';

import * as actions      from '@client/store/actions/location';
import { State, Action } from './types';

const initState: State = {
    isFirstRendering: true
};

export default createReducer<State, Action>(initState, {
    [actions.isFirstRenderingAction.type]: (_state, { payload }) => ({
        isFirstRendering: payload
    })
});
