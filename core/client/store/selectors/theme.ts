import { createSelector } from 'reselect';
import R                  from 'ramda';

import { ThemeState }     from '@app/types/theme';
import { Selector }       from '@lib/redux';

const selectTheme: Selector<ThemeState> = R.prop('theme');

export const getMode = createSelector(
    [ selectTheme ],
    R.prop('mode')
);
