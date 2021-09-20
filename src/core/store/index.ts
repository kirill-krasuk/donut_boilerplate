import browserHistory     from '@utils/history';
import { configureStore } from '@core/utils/store/configureStore';

// @ts-ignore
const preloadedState = window.__PRELOADED_STATE__;

// @ts-ignore
delete window.__PRELOADED_STATE__;

export const { store, history, rootReducer } = configureStore(preloadedState, browserHistory);
export { shakeReducers } from '@core/utils/store/shakeReducers';
