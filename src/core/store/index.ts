import { configureStore } from '@core/utils/store/configureStore';

const preloadedState = __IS_CLIENT__
    ? (window as any).__PRELOADED_STATE__
    : {};

export const { store, rootReducer } = configureStore(preloadedState);
export { shakeReducers } from '@core/utils/store/shakeReducers';
