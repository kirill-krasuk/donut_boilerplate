import { createAction } from '@reduxjs/toolkit';

import { Locale }       from '../../types/enums';

export const changeLocale = createAction<Locale>('locale/CHANGE_LOCALE');
