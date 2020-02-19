import R                  from 'ramda';

import { staticReducers } from '@core/reducers';

export function shakeReducers(preloadedState: Record<string, any>): Array<Record<string, any>> {
    const preloadedStateCopy = R.clone(preloadedState);

    const staticReducersIds = Object.keys(staticReducers);
    const preloadedStateIds = Object.keys(preloadedStateCopy);

    const asyncPreloadedState = {};

    R.symmetricDifference(staticReducersIds, preloadedStateIds)
        .forEach((id) => {
            asyncPreloadedState[id] = { ...preloadedStateCopy[id] };

            delete preloadedStateCopy[id];
        });

    return [ preloadedStateCopy, asyncPreloadedState ];
}
