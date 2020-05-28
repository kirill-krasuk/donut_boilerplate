import { Store, Reducer } from 'redux';

export type AsyncReducer = Reducer<any, any>;

export type AsyncReducers = {
    [key: string]: AsyncReducer;
}

export type ExtendedStore = Store<any, any> & { asyncReducers: AsyncReducers; injectReducer: AsyncReducer };

export type InjectedReducersType = { [key: string]: Record<string, any> };
