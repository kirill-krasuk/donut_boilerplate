import { Location }                                               from 'history';
import { ofType, ActionsObservable, StateObservable }             from 'redux-observable';
import { of }                                                     from 'rxjs';
import { map, switchMap, take }                                   from 'rxjs/operators';
import { getLocation, push }                                      from 'connected-react-router';
import * as O                                                     from 'fp-ts/lib/Option';
import { pipe }                                                   from 'fp-ts/lib/pipeable';
import { flow }                                                   from 'fp-ts/lib/function';

import { CloseModal }                                             from '@core/types/modal';
import { CLOSE_MODAL, setModalHistoryFlagAction, setModalAction } from '@core/store/actions/modal';

const checkHasModalQuery = (search: string) => !!~search.indexOf('action');

const removeQueryOption = (predicateFn: Function) => ({ pathname, search }: Location) => (
    predicateFn(search)
        ? O.some(push(pathname))
        : O.none
);

const getActionsToDispatch = () => [ setModalHistoryFlagAction(false), setModalAction(O.none) ];

const unsetModal = flow(
    O.fold(
        () => of(...getActionsToDispatch()),
        (action) => of(action, ...getActionsToDispatch())
    )
);

export const closeModalEpic = (action$: ActionsObservable<CloseModal>, state$: StateObservable<any>) => action$.pipe(
    ofType(CLOSE_MODAL),
    switchMap(() => state$.pipe(
        take(1),
        map(getLocation),
        switchMap(location => pipe(
            removeQueryOption(checkHasModalQuery)(location),
            unsetModal
        ))
    ))
);
