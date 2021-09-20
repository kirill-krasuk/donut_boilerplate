import R                                       from 'ramda';

import { canUseDOM }                           from '@utils/dom';
import { InjectedReducersType, ExtendedStore } from './types';

export function injectReducers(reducers: InjectedReducersType) {
    if (canUseDOM) {
        import('@core/store').then(({ store }) => R
            .keys(reducers)
            .forEach((key) => (store as ExtendedStore).injectReducer(key, reducers[key]))
        );
    }
}
