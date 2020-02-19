import { configureStore } from '@core/utils/store/configureStore';
import browserHistory     from '@core/utils/history';

// @ts-ignore
const preloadedState = window.__PRELOADED_STATE__;

// @ts-ignore
delete window.__PRELOADED_STATE__;

export const { store, history } = configureStore(preloadedState, browserHistory);
export { shakeReducers } from './shakeReducers';
