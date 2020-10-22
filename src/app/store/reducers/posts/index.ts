import { createReducer } from 'typesafe-actions';
import { initial }       from '@devexperts/remote-data-ts';

import * as actions      from '@app/store/actions/posts';
import { State, Action } from './types';

const initState: State = initial;

export default createReducer<State, Action>(initState, {
    [ actions.SET_POSTS ]: (_state, { payload }) => payload
});
