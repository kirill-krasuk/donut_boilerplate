// @flow

import { canUseDOM } from '../dom';

type InjectedReducersType = { [key: string]: Object };

export function injectReducers(reducers: InjectedReducersType) {
    if (canUseDOM) {
        import('core/utils/store')
            .then(({ store }) => {
                Object.keys(reducers)
                    .forEach((key) => store.injectReducer(key, reducers[key]));
            });
    }
}
