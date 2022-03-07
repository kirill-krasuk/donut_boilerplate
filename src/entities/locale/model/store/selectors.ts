import { createSelector } from '@reduxjs/toolkit';
import R                  from 'ramda';

import { Selector }       from '@lib/redux';
import { Locale }         from '../../types/enums';

const selectProp: Selector<Locale> = R.prop('locale');

export const getLocale = createSelector(selectProp, (state) => state);
