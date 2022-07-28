import R                   from 'ramda';

import { Theme }           from '@shared/config/theme';

import type { ThemeState } from '../../types';
import type { Selector }   from '@lib/redux';

const getMode: Selector<ThemeState['mode']> = R.pathOr(Theme.Light, [ 'theme', 'mode' ]);

export { getMode };
