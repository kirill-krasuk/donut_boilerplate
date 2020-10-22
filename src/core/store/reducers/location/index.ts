import { createReducer } from 'typesafe-actions';
import { Lens }          from 'monocle-ts';

import * as actions      from '@core/store/actions/location';
import { State, Action } from './types';

const initState: State = {
    isFirstRendering: true
};

const locationLens = Lens.fromProp<State>()('isFirstRendering');

export default createReducer<State, Action>(initState, {
    [actions.IS_FIRST_RENDERING]: (state, { payload }) => (
        locationLens
            .set(payload)(state)
    )
});
