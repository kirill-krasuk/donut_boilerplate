import { createSelector } from 'reselect';
import * as R             from 'ramda';

const selectLocation = R.prop('location');

export const getIsFirstRendering = createSelector(
    selectLocation,
    R.prop('isFirstRendering')
);
