import { createAction } from '@reduxjs/toolkit';

import type { Locale }  from '../../types/enums';

const changeLocale = createAction<Locale>('locale/CHANGE_LOCALE');

export { changeLocale };
