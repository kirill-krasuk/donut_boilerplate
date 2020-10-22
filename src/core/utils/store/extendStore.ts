/* eslint-disable no-param-reassign */
import { History }                     from 'history';

import createRootReducer               from '@core/store/reducers';
import { ExtendedStore, AsyncReducer } from './types';

export const extendStore = (store: ExtendedStore, history: History<any>, asyncState: Record<string, any>): void => {
    store.asyncReducers = {};

    store.injectReducer = (key: string, asyncReducer: AsyncReducer): void => {
        store.asyncReducers[key] = (state = asyncState[key], action) => asyncReducer(state, action);

        store.replaceReducer(createRootReducer(history, store.asyncReducers));
    };
};
