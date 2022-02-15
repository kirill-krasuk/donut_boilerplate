import R                  from 'ramda';

import { staticReducers } from '@client/store/reducers';

export function shakeReducers(preloadedState: Record<string, any>): ReadonlyArray<Record<string, any>> {
    const preloadedStateCopy = R.clone(preloadedState);

    const staticReducersIds = R.keys(staticReducers);
    const preloadedStateIds = R.keys(preloadedStateCopy);

    const asyncPreloadedState: Record<string, any> = {};

    R.symmetricDifference(staticReducersIds, preloadedStateIds)
        .forEach((id) => {
            asyncPreloadedState[id] = { ...preloadedStateCopy[id] };

            delete preloadedStateCopy[id];
        });

    return [ preloadedStateCopy, asyncPreloadedState ];
}
