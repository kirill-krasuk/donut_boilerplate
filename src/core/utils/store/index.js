import { configureStore } from 'core/utils/store/configureStore';
import browserHistory     from 'core/utils/history';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const { store, history } = configureStore(preloadedState, browserHistory);

export { store, history };
