import { createSelector } from 'reselect';
import R                  from 'ramda';

const selectLocation = R.prop('location');

export const getIsFirstRendering = createSelector(
    selectLocation,
    R.prop('isFirstRendering')
);
