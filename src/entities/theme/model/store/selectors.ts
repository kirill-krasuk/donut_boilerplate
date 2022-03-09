import { createSelector } from '@reduxjs/toolkit';
import R                  from 'ramda';

import { Selector }       from '@lib/redux';
import { ThemeState }     from '@shared/config/theme';

const selectTheme: Selector<ThemeState> = R.prop('theme');

export const getMode = createSelector(
    [ selectTheme ],
    R.prop('mode')
);
