import R                                       from 'ramda';

import { InjectedReducersType, ExtendedStore } from './types';

export function injectReducers(reducers: InjectedReducersType) {
    if (__IS_CLIENT__) {
        import('@core/store').then(({ store }) => R
            .keys(reducers)
            .forEach((key) => (store as ExtendedStore).injectReducer(key, reducers[key]))
        );
    }
}
