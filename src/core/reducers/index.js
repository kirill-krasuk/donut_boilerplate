import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router';

import ready               from './ready';
import theme               from './theme';

export default history => combineReducers({
    router: connectRouter(history),
    ready,
    theme
});
