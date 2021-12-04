import { createSelector } from 'reselect';
import R                  from 'ramda';

import { Locale }         from '@core/enums/locale';
import { Selector }       from '@core/types/selector';

const selectProp: Selector<Locale> = R.prop('locale');

export const getLocale = createSelector(selectProp, (state) => state);
