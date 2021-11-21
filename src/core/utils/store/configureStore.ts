import {
    createStore,
    applyMiddleware,
    Action,
    Middleware
} from 'redux';
import { createEpicMiddleware, ofType, ActionsObservable } from 'redux-observable';
import { composeWithDevTools }                             from 'redux-devtools-extension';
import { BehaviorSubject, Observable }                     from 'rxjs';
import { mergeMap, takeUntil }                             from 'rxjs/operators';
import { compose, isEmpty }                                from 'ramda';

import { themeMiddleware }                                 from '@core/store/middlewares/theme';
import { localeMiddleware }                                from '@core/store/middlewares/locale';
import { locationMiddleware }                              from '@core/store/middlewares/location';
import env                                                 from '@env/';
import ssrReducers                                         from '@app/store/reducers/serverReducer';
import request$                                            from '@core/services/RequestManager';
import rootEpic                                            from '@core/store/epics';
import createRootReducer                                   from '@core/store/reducers';
import { Environment }                                     from '@core/enums/env';
import { extendStore }                                     from './extendStore';
import { shakeReducers }                                   from './shakeReducers';
import { ExtendedStore }                                   from './types';

export function configureStore(preloadedState: object = {}) {
    const [ staticPreloadedState, asyncPreloadedState ] = shakeReducers(preloadedState);

    const { appEnv } = env.client;

    const isClientSide = !isEmpty(preloadedState);

    const epicMiddleware = createEpicMiddleware({
        dependencies: {
            request$
        }
    });

    const middlewares: Middleware[] = [
        locationMiddleware,
        themeMiddleware,
        localeMiddleware,
    ];

    if (isClientSide) {
        middlewares.push(epicMiddleware);
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

    if (isClientSide) {
        const epic$ = new BehaviorSubject(rootEpic);

        const hotReloadingEpic = (
            action$: ActionsObservable<Action<any>>,
            ...rest: any[]
        ): Observable<any> => epic$.pipe(
            mergeMap(epic => epic(action$, ...rest).pipe(
                takeUntil(action$.pipe(
                    ofType('EPIC_END')
                ))
            ))
        );

        epicMiddleware.run(hotReloadingEpic);

        if ((module as any).hot) {
            (module as any).hot.accept('../../store/reducers', () => {
                store.replaceReducer(createRootReducer({}));
            });

            (module as any).hot.accept('../../store/epics', () => {
                const nextRootEpic = require('../../store/epics').default;

                store.dispatch({ type: 'EPIC_END' });
                epic$.next(nextRootEpic);
            });
        }
    }

    return { store, rootReducer };
}
