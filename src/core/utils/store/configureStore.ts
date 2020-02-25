import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware             from 'redux-saga';
import { routerMiddleware }             from 'connected-react-router';
import { composeWithDevTools }          from 'redux-devtools-extension';
import { History }                      from 'history';
import { compose }                      from 'ramda';

import { themeMiddleware }              from '@core/middlewares/theme';
import { localeMiddleware }             from '@core/middlewares/locale';
import { locationMiddleware }           from '@core/middlewares/location';
import rootSaga                         from '@core/saga';
import createRootReducer                from '@core/reducers';
import { Middleware }                   from '@core/types/store';
import { shakeReducers }                from './shakeReducers';

export function configureStore(
    preloadedState: Record<string, any> = {},
    history: History<any>,
    ssrReducers: Record<string, any> = {}
): Record<string, any> {
    const [ staticPreloadedState, asyncPreloadedState ] = shakeReducers(preloadedState);

    const env                       = process.env.NODE_ENV;
    const sagaMiddleware            = createSagaMiddleware();
    const middlewares: Middleware[] = [
        sagaMiddleware,
        locationMiddleware,
        themeMiddleware,
        localeMiddleware,
        routerMiddleware(history)
    ];

    const composeEnhancers: Function =
        env === 'development'
            ? composeWithDevTools
            : compose;

    const store = createStore(
        createRootReducer(history, {}, ssrReducers),
        staticPreloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    store.asyncReducers = {};

    store.injectReducer = (key: string, asyncReducer: Function): void => {
        store.asyncReducers[key] = (
            state: Record<string, any> = asyncPreloadedState[key],
            action: Record<string, any>
        ): Function => asyncReducer(state, action);


        store.replaceReducer(createRootReducer(history, store.asyncReducers));
    };

    sagaMiddleware.run(rootSaga);

    if ((module as any).hot) {
        (module as any).hot.accept('../../reducers', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return { store, history };
}
