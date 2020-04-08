import { ofType, ActionsObservable } from 'redux-observable';
import { mapTo }                     from 'rxjs/operators';
import { Observable }                from 'rxjs';

export const testEpic = (action$: ActionsObservable<any>): Observable<any> => action$.pipe(
    ofType('TEST'),
    mapTo({ type: 'HELLO' })
);
