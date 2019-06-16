import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware }                      from 'connected-react-router';
import { composeWithDevTools }                   from 'redux-devtools-extension';
import * as R                                    from 'ramda';

import createRootReducer                         from 'core/reducers';

export function configureStore(preloadedState: Object = {}, history?: Object = {}): Object {
    const env         = process.env.NODE_ENV;
    const middlewares = [];

    const composeEnhancers: Function =
        env === 'development'
            ? composeWithDevTools
            : compose;

    !R.isEmpty(history) && middlewares.push(routerMiddleware(history));

    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    if (module.hot) {
        module.hot.accept('../../reducers', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store;
}
