import { Action } from '@core/types/actions';

export type Store = {
    dispatch: Function;
    getState: Function;
}

export type Middleware = (store: Store) => (next: Function) => (action: Action) => Function;
