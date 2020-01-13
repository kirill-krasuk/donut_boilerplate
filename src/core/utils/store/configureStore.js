// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware                      from 'redux-saga';
import { routerMiddleware }                      from 'connected-react-router';
import { composeWithDevTools }                   from 'redux-devtools-extension';
import * as R                                    from 'ramda';

import { themeMiddleware }                       from 'core/middlewares/theme';
import { localeMiddleware }                      from 'core/middlewares/locale';
import { locationMiddleware }                    from 'core/middlewares/location';
import rootSaga                                  from 'core/saga';
import createRootReducer                         from 'core/reducers';
import { shakeReducers }                         from './shakeReducers';

export function configureStore(preloadedState: Object = {}, history?: Object = {}, ssrReducers?: Object = {}): Object {
    const [ staticPreloadedState, asyncPreloadedState ] = shakeReducers(preloadedState);

    const env            = process.env.NODE_ENV;
    const sagaMiddleware = createSagaMiddleware();
    const middlewares    = [ sagaMiddleware ];

    const composeEnhancers: Function =
        env === 'development'
            ? composeWithDevTools
            : compose;

    if (!R.isEmpty(history)) {
        middlewares.push(
            locationMiddleware,
            themeMiddleware,
            localeMiddleware,
            routerMiddleware(history)
        );
    }

    const store = createStore(
        createRootReducer(history, {}, ssrReducers),
        staticPreloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    // flow-disable-next-line
    store.asyncReducers = {};

    // flow-disable-next-line
    store.injectReducer = (key, asyncReducer) => { // flow-disable-next-line
        store.asyncReducers[key] = (state = asyncPreloadedState[key], action) => asyncReducer(state, action);

        // flow-disable-next-line
        store.replaceReducer(createRootReducer(history, store.asyncReducers));
    };

    sagaMiddleware.run(rootSaga);

    // flow-disable-next-line
    if (module.hot) {
        module.hot.accept('../../reducers', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return { store, history };
}
