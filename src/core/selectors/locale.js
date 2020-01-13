import { createSelector } from 'reselect';
import * as R             from 'ramda';

export const getLocale = createSelector(R.prop('locale'), (locale) => locale);
