import { createSelector } from 'reselect';
import R                  from 'ramda';

import { Locale }         from '@app/enums/locale';
import { Selector }       from '@shared/types/selector';

const selectProp: Selector<Locale> = R.prop('locale');

export const getLocale = createSelector(selectProp, (state) => state);
