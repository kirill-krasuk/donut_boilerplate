/* eslint-disable no-param-reassign */
import { History }       from 'history';
import { Reducer }       from 'redux';

import createRootReducer from '@core/reducers';
import { ExtendedStore } from './types';

export const extendStore = (store: ExtendedStore, history: History<any>, asyncState: Record<string, any>): void => {
    store.asyncReducers = {};

    store.injectReducer = (key: string, asyncReducer: Function): void => {
        store.asyncReducers[key] = (
            state: Record<string, any> = asyncState[key],
            action: Record<string, any>
        ): Function => asyncReducer(state, action);

        // TODO: fix type
        store.replaceReducer(createRootReducer(history, store.asyncReducers) as Reducer<any, any>);
    };
};
