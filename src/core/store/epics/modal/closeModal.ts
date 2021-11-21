// import { getLocation, push }                                           from 'connected-react-router';

// import { CloseModal }                                                  from '@core/types/modal';
// import { closeModalAction, setModalHistoryFlagAction, setModalAction } from '@core/store/actions/modal';

// const checkHasModalQuery = (search: string) => !!~search.indexOf('action');

// const removeQueryOption = (predicateFn: Function) => ({ pathname, search }: Location) => (
//     predicateFn(search)
//         ? O.some(push(pathname))
//         : O.none
// );

// const getActionsToDispatch = () => [ setModalHistoryFlagAction(false), setModalAction(O.none) ];

// const unsetModal = flow(
//     O.fold(
//         () => of(...getActionsToDispatch()),
//         (action) => of(action, ...getActionsToDispatch())
//     )
// );

// export const closeModalEpic = (action$: ActionsObservable<CloseModal>, state$: StateObservable<any>) => action$.pipe(
//     ofType(closeModalAction.type),
//     switchMap(() => state$.pipe(
//         take(1),
//         map(getLocation),
//         switchMap(location => pipe(
//             removeQueryOption(checkHasModalQuery)(location),
//             unsetModal
//         ))
//     ))
// );
