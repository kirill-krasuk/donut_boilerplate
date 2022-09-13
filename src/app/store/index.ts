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
)(store => {
	const _module = module as any;

	if (__IS_CLIENT__ && appEnv === Environment.Dev && _module.hot) {
		_module.hot.accept('./reducers', () => {
			store.replaceReducer(rootReducer as any);
		});
	}
});

export { store };
