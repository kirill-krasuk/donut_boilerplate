import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware                      from 'redux-saga';
import { routerMiddleware }                      from 'connected-react-router';
import { composeWithDevTools }                   from 'redux-devtools-extension';
import { createLogger }                          from 'redux-logger';
import * as R                                    from 'ramda';

import rootSaga                                  from 'core/saga';
import createRootReducer                         from 'core/reducers';

export function configureStore(preloadedState: Object = {}, history?: Object = {}): Object {
    const env             = process.env.NODE_ENV;
    const isLoggerEnabled = JSON.parse(process.env.REDUX_LOGGER);
    const sagaMiddleware  = createSagaMiddleware();
    const middlewares     = [ sagaMiddleware ];

    const composeEnhancers: Function =
        env === 'development'
            ? composeWithDevTools
            : compose;

    if (!R.isEmpty(history)) {
        middlewares.push(routerMiddleware(history));
    }

    if (isLoggerEnabled && env === 'production') {
        middlewares.push(createLogger());
    }

    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('../../reducers', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store;
}
