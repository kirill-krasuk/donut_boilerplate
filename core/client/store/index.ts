import { configureStore } from '@client/utils/store/configureStore';

const preloadedState = __IS_CLIENT__
    ? (window as any).__PRELOADED_STATE__
    : {};

export const { store, rootReducer } = configureStore(preloadedState);
export { shakeReducers } from '@client/utils/store/shakeReducers';
