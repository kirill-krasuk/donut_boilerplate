import { createSelector } from 'reselect';
import R                  from 'ramda';

import { ELocale }        from '@core/enums/locale';
import { Selector }       from '@core/types/selector';

const selectProp: Selector<ELocale> = R.prop('locale');

export const getLocale = createSelector(selectProp, R.identity);
