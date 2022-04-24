import {
	Action,
	AnyAction,
	CombinedState,
	configureStore,
	PreloadedState,
	Reducer,
	ReducersMapObject
} from '@reduxjs/toolkit';

import type { NoInfer }    from '@shared/types/utility';
import type { Middleware } from 'redux';

function createStore<S = any, A extends Action = AnyAction>(
	reducer: Reducer<S, A> | ReducersMapObject<S, A>,

	// TODO: fix type
	preloadedState: PreloadedState<CombinedState<NoInfer<S>>> = {} as any,
	middlewares: Middleware[] = []
) {
	const store = configureStore({
		preloadedState,
		reducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middlewares)
	});

	return (reducerReplacementFunction?: (s: typeof store) => void) => {
		reducerReplacementFunction?.(store);

		return store;
	};
}

export { createStore };
