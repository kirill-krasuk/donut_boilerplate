import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router';

import ready               from './ready';

export default history => combineReducers({
    router: connectRouter(history),
    ready
});
