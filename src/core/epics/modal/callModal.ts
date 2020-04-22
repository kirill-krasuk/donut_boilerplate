import { of, Observable }                                        from 'rxjs';
import { ActionsObservable, ofType }                             from 'redux-observable';
import { push }                                                  from 'connected-react-router';
import { map, switchMap }                                        from 'rxjs/operators';
import * as O                                                    from 'fp-ts/lib/Option';
import { pipe }                                                  from 'fp-ts/lib/pipeable';

import { emptyEpicAction }                                       from '@core/actions/emptyEpic';
import { CallModal, CallModalObjectPayload }                     from '@core/types/modal';
import { CALL_MODAL, setModalAction, setModalHistoryFlagAction } from '@core/actions/modal';
import { EModals }                                               from '@app/enums/modal';
import { camelToSnake }                                          from '@core/utils/string';

type ReturnTypeEpic = Observable<object>

const callModalById = ({ payload }: CallModal) => (
    typeof payload === 'string'
        ? setModalAction(O.some(payload))
        : of(payload)
);

const queryStringByID = (id: EModals) => ({ search: `?action=${ camelToSnake(id) }` });

const foldAndRedirect = (history: boolean, option: O.Option<EModals>) => pipe(
    option,
    O.fold<EModals, ReturnTypeEpic>(
        () => of(emptyEpicAction()),
        (id) => of(setModalHistoryFlagAction(history), push(queryStringByID(id)))
    )
);

const dispatchModalHFlag = ({ history, id: idOption }: CallModalObjectPayload) => (
    history
        ? foldAndRedirect(history, idOption)
        : of(setModalHistoryFlagAction(history), setModalAction(idOption))
);

export const callModalEpic = (action$: ActionsObservable<CallModal>) => action$.pipe(
    ofType(CALL_MODAL),
    map(callModalById),
    switchMap(action => {
        if (action instanceof Observable) {
            return action.pipe(
                switchMap(dispatchModalHFlag)
            );
        }

        return of(action);
    }),
);
