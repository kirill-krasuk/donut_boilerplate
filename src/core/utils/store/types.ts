import { Store } from 'redux';

export type ExtendedStore = Store<any, any> & { asyncReducers: Record<string, any>; injectReducer: Function };
