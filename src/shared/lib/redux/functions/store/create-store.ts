import {
	configureStore,
	Reducer,
	ReducersMapObject,
	Action,
	AnyAction,
	PreloadedState,
	CombinedState,
} from '@reduxjs/toolkit';

import type { Middleware } from 'redux';
import type { NoInfer }    from '@shared/types/utility';

const createStore = <S = any, A extends Action = AnyAction>(
	reducer: Reducer<S, A> | ReducersMapObject<S, A>,

	// TODO: fix type
	preloadedState: PreloadedState<CombinedState<NoInfer<S>>> = {} as any,
	middlewares: Middleware[] = []
) => {
	const store = configureStore({
		preloadedState,
		reducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middlewares),
	});

	return (reducerReplacementFunction?: (s: typeof store) => void) => {
		reducerReplacementFunction?.(store);

		return store;
	};
};

export { createStore };
