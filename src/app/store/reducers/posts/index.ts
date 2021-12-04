import { createReducer } from 'typesafe-actions';

import * as actions      from '@app/store/actions/posts';
import { State, Action } from './types';

const initState: State = null;

export default createReducer<State, Action>(initState, {
    [ actions.setPostsAction.type ]: (_state, { payload }) => payload
});
