// @flow
import { handleActions } from 'redux-actions';

const initState = true;

export default handleActions<boolean, {}>({}, initState);
