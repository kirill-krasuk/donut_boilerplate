import { ActionType } from '@core/types/actions';

export type StoreType = {
    dispatch: Function;
    getState: Function;
}

export type MiddlewareType = (store: StoreType) => (next: Function) => (action: ActionType) => Function;
