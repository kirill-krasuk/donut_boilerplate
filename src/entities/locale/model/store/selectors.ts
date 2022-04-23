import { createSelector } from '@reduxjs/toolkit';
import R                  from 'ramda';

import type { Selector }  from '@lib/redux';
import type { Locale }    from '../../types/enums';

const selectProp: Selector<Locale> = R.prop('locale');

const getLocale = createSelector(selectProp, state => state);

export { getLocale };
