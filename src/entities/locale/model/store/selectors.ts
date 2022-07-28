import R                 from 'ramda';

import type { Selector } from '@lib/redux';
import type { Locale }   from '../../types/enums';

const getLocale: Selector<Locale> = R.prop('locale');

export { getLocale };
