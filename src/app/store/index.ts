/* eslint-disable unicorn/prefer-module */
import { createStore } from '@lib/redux';
import { env }         from '@env/index';
import { Environment } from '@enums/env';
import rootReducer     from './reducers';
import appMiddlewares  from './middlewares';

const { appEnv } = env.client;

const preloadedState = __IS_CLIENT__
    ? (window as any).__PRELOADED_STATE__
    : {};

const store = createStore(
    rootReducer,
    preloadedState,
    appMiddlewares
)((store) => {
    if (__IS_CLIENT__ && appEnv === Environment.Dev && (module as any).hot) {
        (module as any).hot.accept('./reducers', () => store.replaceReducer(rootReducer as any));
    }
});

export { store };
