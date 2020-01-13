import { createSelector } from 'reselect';
import * as R             from 'ramda';

const selectTheme = R.prop('theme');

export const getMode = createSelector(
    selectTheme,
    R.prop('mode')
);
