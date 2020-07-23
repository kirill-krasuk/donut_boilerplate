import R                  from 'ramda';

import { staticReducers } from '@core/reducers';

// TODO: to declarative
export function shakeReducers(preloadedState: Record<string, any>): Array<Record<string, any>> {
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
