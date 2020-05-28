import {
    createStore,
    applyMiddleware,
    Action,
    Middleware
} from 'redux';
import { createEpicMiddleware, ofType, ActionsObservable } from 'redux-observable';
import { routerMiddleware }                                from 'connected-react-router';
import { composeWithDevTools }                             from 'redux-devtools-extension';
import { BehaviorSubject, Observable }                     from 'rxjs';
import { mergeMap, takeUntil }                             from 'rxjs/operators';
import { History }                                         from 'history';
import { compose, isEmpty }                                from 'ramda';

import { themeMiddleware }                                 from '@core/middlewares/theme';
import { localeMiddleware }                                from '@core/middlewares/locale';
import { locationMiddleware }                              from '@core/middlewares/location';
import rootEpic                                            from '@core/epics';
import createRootReducer                                   from '@core/reducers';
import * as Env                                            from '@core/config/env';
import ssrReducers                                         from '@app/reducers/serverReducer';
import request$                                            from '@core/services/RequestManager';
import { Environment }                                     from '../../enums/env';
import { extendStore }                                     from './extendStore';
import { shakeReducers }                                   from './shakeReducers';
import { ExtendedStore }                                   from './types';

export function configureStore(preloadedState: object = {}, history: History<any>) {
    const [ staticPreloadedState, asyncPreloadedState ] = shakeReducers(preloadedState);

    const env = Env.get('appEnv');

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
        routerMiddleware(history)
    ];

    if (isClientSide) {
        middlewares.push(epicMiddleware);
    }

    const composeEnhancers: Function =
        env === Environment.Dev
            ? composeWithDevTools
            : compose;

    const store: ExtendedStore = createStore(
        createRootReducer(history, {}, ssrReducers),
        staticPreloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    extendStore(store, history, asyncPreloadedState);

    if (isClientSide) {
        const epic$ = new BehaviorSubject(rootEpic);

        const hotReloadingEpic = (action$: ActionsObservable<Action<any>>, ...rest: any[]): Observable<any> => epic$.pipe(
            mergeMap(epic => epic(action$, ...rest).pipe(
                takeUntil(action$.pipe(
                    ofType('EPIC_END')
                ))
            ))
        );

        epicMiddleware.run(hotReloadingEpic);

        if ((module as any).hot) {
            (module as any).hot.accept('../../reducers', () => {
                store.replaceReducer(createRootReducer(history));
            });

            (module as any).hot.accept('../../epics', () => {
                const nextRootEpic = require('../../epics').default;

                store.dispatch({ type: 'EPIC_END' });
                epic$.next(nextRootEpic);
            });
        }
    }


    return { store, history };
}
