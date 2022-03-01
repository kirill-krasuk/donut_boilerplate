import { createSelector } from 'reselect';
import R                  from 'ramda';

import { Selector }       from '@lib/redux';
import { LocationState }  from '@client/store/types/location';

const selectLocation: Selector<LocationState> = R.prop('location');

export const getIsFirstRendering = createSelector(
    [ selectLocation ],
    R.prop('isFirstRendering')
);
