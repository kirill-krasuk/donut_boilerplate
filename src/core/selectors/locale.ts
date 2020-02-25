import { createSelector } from 'reselect';
import R                  from 'ramda';

import { ELocale }        from '@core/enums/locale';

const selectProp: (state: Record<string, any>) => ELocale = R.prop('locale');

export const getLocale = createSelector<object, ReturnType<typeof selectProp>, ELocale>(selectProp, R.identity);
