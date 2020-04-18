import R                        from 'ramda';

import { canUseDOM }            from '../dom';
import { InjectedReducersType } from './types';

export function injectReducers(reducers: InjectedReducersType): void {
    if (canUseDOM) {
        import('@core/utils/store').then(({ store }) => R
            .keys(reducers)
            .forEach((key) => store.injectReducer(key, reducers[key]))
        );
    }
}
