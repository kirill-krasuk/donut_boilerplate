import { createSelector }  from '@reduxjs/toolkit';
import R                   from 'ramda';

import type { ThemeState } from '../../types';
import type { Selector }   from '@lib/redux';

const selectTheme: Selector<ThemeState> = R.prop('theme');

const getMode = createSelector([ selectTheme ], R.prop('mode'));

export { getMode };
