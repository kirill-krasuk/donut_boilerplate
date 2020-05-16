import { createSelector } from 'reselect';
import R                  from 'ramda';

import { ThemeState }     from '@core/types/theme';
import { Selector }       from '@core/types/selector';

const selectTheme: Selector<ThemeState> = R.prop('theme');

export const getMode = createSelector(
    [ selectTheme ],
    R.prop('mode')
);
