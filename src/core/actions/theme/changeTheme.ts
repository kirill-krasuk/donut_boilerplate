import { createAction } from 'redux-actions';

import { ChangeTheme }  from '@core/types/theme';

export const CHANGE_THEME: ChangeTheme['type'] = 'core/CHANGE_THEME';
export const changeThemeAction = createAction<ChangeTheme['payload']>(CHANGE_THEME);
