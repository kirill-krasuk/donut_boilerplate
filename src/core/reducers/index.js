import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router';

import ready               from './ready';
import theme               from './theme';
import locale              from './locale';

export default history => combineReducers({
    router: connectRouter(history),
    ready,
    theme,
    locale
});
