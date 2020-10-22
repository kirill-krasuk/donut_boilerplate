import { createAction } from 'typesafe-actions';

import { ChangeTheme }  from '@core/types/theme';

export const CHANGE_THEME: ChangeTheme['type'] = 'core/CHANGE_THEME';
export const changeThemeAction = createAction(CHANGE_THEME)<ChangeTheme['payload']>();
