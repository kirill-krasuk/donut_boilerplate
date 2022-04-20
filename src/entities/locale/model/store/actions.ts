import { createAction } from '@reduxjs/toolkit';

import type { Locale }  from '../../types/enums';

export const changeLocale = createAction<Locale>('locale/CHANGE_LOCALE');
