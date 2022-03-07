import {
    createStore,
    applyMiddleware,
    Middleware
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { compose }             from 'ramda';

import { locationMiddleware }  from '@client/store/middlewares/location';
import appMiddlewares          from '@app/store/middlewares';
import env                     from '@env/';
import ssrReducers             from '@app/store/reducers/serverReducer';
import createRootReducer       from '@client/store/reducers';
import { Environment }         from '@enums/env';
import { extendStore }         from './extendStore';
import { shakeReducers }       from './shakeReducers';
import { ExtendedStore }       from './types';

export function configureStore(preloadedState: object = {}) {
    const [ staticPreloadedState, asyncPreloadedState ] = shakeReducers(preloadedState);

    const { appEnv } = env.client;

    const middlewares: Middleware[] = [
        locationMiddleware,
        ...appMiddlewares,
    ];

    if (__IS_CLIENT__) {
        // push the middleware
        middlewares.push();
    }

    const composeEnhancers: Function =
        appEnv === Environment.Dev
            ? composeWithDevTools
            : compose;

    const rootReducer = createRootReducer({}, ssrReducers);

    const store: ExtendedStore = createStore(
        rootReducer,
        staticPreloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    extendStore(store, asyncPreloadedState);

    if (__IS_CLIENT__) {
        if ((module as any).hot) {
            (module as any).hot.accept('../../store/reducers', () => {
                store.replaceReducer(createRootReducer({}));
            });
        }
    }

    return { store, rootReducer };
}
