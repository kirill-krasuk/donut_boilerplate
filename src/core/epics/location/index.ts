import { LOCATION_CHANGE }           from 'connected-react-router';
import { ofType, ActionsObservable } from 'redux-observable';
import { map, pluck }                from 'rxjs/operators';
import R                             from 'ramda';
import * as O                        from 'fp-ts/lib/Option';
import { pipe }                      from 'fp-ts/lib/pipeable';
import { flow }                      from 'fp-ts/lib/function';

import * as modals                   from '@app/modals';
import { Modals }                    from '@app/enums/modal';
import { callModalAction }           from '@core/actions/modal';
import { CallModal }                 from '@core/types/modal';
import { snakeToCamel }              from '@core/utils/string';
import { StringFormatter }           from '@core/enums/string';
import { EmptyEpic }                 from '@core/types/empty';
import { emptyEpicAction }           from '@core/actions/emptyEpic';

type ReturnEpicType = CallModal | EmptyEpic;

const splitSearchString = (search: string) => R.compose(
    O.some,
    R.split('&'),
    R.replace('?', '')
)(search);

const findActionPattern = (patterns: string[]) => (
    O.fromNullable(patterns.find(pattern => ~pattern.indexOf('action')))
);

const splitActionQueryByID = R.split('=');

const filterModalsIDOption = ([ , id ]: string[]) => {
    const modalIdOption = snakeToCamel(StringFormatter.Upper, id as Modals);
    const modalIDs      = R.keys(modals);

    return R.includes(modalIdOption)(modalIDs)
        ? O.some(modalIdOption)
        : O.none;
};

const actionOrEMPTY = flow(
    O.fold<Modals, ReturnEpicType>(
        () => emptyEpicAction(),
        (v) => callModalAction(v)
    )
);

export const locationEpic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType(LOCATION_CHANGE),
    pluck('payload', 'location', 'search'),
    map(search => pipe(
        splitSearchString(search),
        O.chain(findActionPattern),
        O.map(splitActionQueryByID),
        O.chain(filterModalsIDOption),
        actionOrEMPTY
    )),
);
