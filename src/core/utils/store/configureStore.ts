import {
    createStore, applyMiddleware, Reducer, Store
} from 'redux';
import createSagaMiddleware    from 'redux-saga';
import { routerMiddleware }    from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History }             from 'history';
import { compose }             from 'ramda';

import { themeMiddleware }     from '@core/middlewares/theme';
import { localeMiddleware }    from '@core/middlewares/locale';
import { locationMiddleware }  from '@core/middlewares/location';
import rootSaga                from '@core/saga';
import createRootReducer       from '@core/reducers';
import { shakeReducers }       from './shakeReducers';

export function configureStore(
    preloadedState: Record<string, any> = {},
    history: History<any>,
    ssrReducers: Record<string, any> = {}
): Record<string, any> {
    const [ staticPreloadedState, asyncPreloadedState ] = shakeReducers(preloadedState);

    const env              = process.env.NODE_ENV;
    const sagaMiddleware   = createSagaMiddleware();
    const middlewares: any = [
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

    // TODO: fix type
    const store: Store<any, any> & { asyncReducers: Record<string, any>; injectReducer: Function } = createStore(
        createRootReducer(history, {}, ssrReducers) as Reducer<any, any>,
        staticPreloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    store.asyncReducers = {};

    store.injectReducer = (key: string, asyncReducer: Function): void => {
        store.asyncReducers[key] = (
            state: Record<string, any> = asyncPreloadedState[key],
            action: Record<string, any>
        ): Function => asyncReducer(state, action);

        // TODO: fix type
        store.replaceReducer(createRootReducer(history, store.asyncReducers) as Reducer<any, any>);
    };

    sagaMiddleware.run(rootSaga);

    if ((module as any).hot) {
        (module as any).hot.accept('../../reducers', () => {
            // TODO: fix type
            store.replaceReducer(createRootReducer(history) as Reducer<any, any>);
        });
    }

    return { store, history };
}
