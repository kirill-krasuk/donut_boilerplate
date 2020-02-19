import { createSelector } from 'reselect';
import R                  from 'ramda';

export const getLocale = createSelector(R.prop('locale'), R.identity);
