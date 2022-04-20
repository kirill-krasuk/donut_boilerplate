/* eslint-disable unicorn/no-empty-file */
// /* eslint-disable no-param-reassign */
// import createRootReducer               from '@client/store/reducers';
// import { ExtendedStore, AsyncReducer } from './types';

// export const extendStore = (store: ExtendedStore, asyncState: Record<string, any>): void => {
//     store.asyncReducers = {};

//     store.injectReducer = (key: string, asyncReducer: AsyncReducer): void => {
//         store.asyncReducers[key] = (state = asyncState[key], action) => asyncReducer(state, action);

//         store.replaceReducer(createRootReducer(store.asyncReducers));
//     };
// };
export {};
