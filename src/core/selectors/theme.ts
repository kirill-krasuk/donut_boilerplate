import { createSelector } from 'reselect';
import R                  from 'ramda';

import { ETheme }         from '@core/enums/theme';
import { ThemeState }     from '@core/types/theme';
import { Selector }       from '@core/types/selector';

const selectTheme: Selector<ThemeState> = R.prop('theme');

export const getMode = createSelector<object, ReturnType<typeof selectTheme>, ETheme>(
    [ selectTheme ],
    R.prop('mode')
);
