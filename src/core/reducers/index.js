import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router';

import theme               from './theme';
import locale              from './locale';
import modal               from './modal';

export default history => combineReducers({
    router: connectRouter(history),
    theme,
    locale,
    modal
});
