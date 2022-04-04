import {
    configureStore,
    Reducer,
    ReducersMapObject,
    Action,
    AnyAction,
    PreloadedState,
    CombinedState
} from '@reduxjs/toolkit';
import { Middleware } from 'redux';

import { NoInfer }    from '@shared/types/utility';

export const createStore = <S = any, A extends Action = AnyAction>(
    reducer: Reducer<S, A> | ReducersMapObject<S, A>,
    preloadedState: PreloadedState<CombinedState<NoInfer<S>>> = {},
    middlewares: Middleware[] = []
) => {
    const store = configureStore({
        preloadedState,
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(...middlewares)
    });

    return (reducerReplacementFunction?: (s: typeof store) => void) => {
        reducerReplacementFunction?.(store);

        return store;
    };
};
