import R                                       from 'ramda';

import { canUseDOM }                           from '../dom';
import { InjectedReducersType, ExtendedStore } from './types';

export function injectReducers(reducers: InjectedReducersType): void {
    if (canUseDOM) {
        import('@core/utils/store').then(({ store }) => R
            .keys(reducers)
            .forEach((key) => (store as ExtendedStore).injectReducer(key, reducers[key]))
        );
    }
}
