import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware                      from 'redux-saga';
import { routerMiddleware }                      from 'connected-react-router';
import { composeWithDevTools }                   from 'redux-devtools-extension';
import R                                         from 'ramda';
import { History }                               from 'history';

import { themeMiddleware }                       from '@core/middlewares/theme';
import { localeMiddleware }                      from '@core/middlewares/locale';
import { locationMiddleware }                    from '@core/middlewares/location';
import rootSaga                                  from '@core/saga';
import createRootReducer                         from '@core/reducers';
import { MiddlewareType }                        from '@core/types/store';
import { shakeReducers }                         from './shakeReducers';

export function configureStore(preloadedState: Record<string, any> = {}, history: History<any> | {} = {}, ssrReducers: Record<string, any> = {}): Record<string, any> {
    const [ staticPreloadedState, asyncPreloadedState ] = shakeReducers(preloadedState);

    const env                           = process.env.NODE_ENV;
    const sagaMiddleware                = createSagaMiddleware();
    const middlewares: MiddlewareType[] = [ sagaMiddleware ];

    const composeEnhancers: Function =
        env === 'development'
            ? composeWithDevTools
            : compose;

    if (!R.isEmpty(history)) {
        middlewares.push(
            locationMiddleware,
            themeMiddleware,
            localeMiddleware,
            routerMiddleware(<History<any>> history)
        );
    }

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
