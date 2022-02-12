import { createSelector } from 'reselect';
import R                  from 'ramda';

import { Selector }       from '@shared/types/selector';
import { LocationState }  from '@core/store/types/location';

const selectLocation: Selector<LocationState> = R.prop('location');

export const getIsFirstRendering = createSelector(
    [ selectLocation ],
    R.prop('isFirstRendering')
);
