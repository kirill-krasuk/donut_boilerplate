import { createSelector } from 'reselect';
import R                  from 'ramda';

import { Selector }       from '@core/types/selector';
import { LocationState }  from '@core/types/location';

const selectLocation: Selector<LocationState> = R.prop('location');

export const getIsFirstRendering = createSelector<object, ReturnType<typeof selectLocation>, boolean>(
    [ selectLocation ],
    R.prop('isFirstRendering')
);
