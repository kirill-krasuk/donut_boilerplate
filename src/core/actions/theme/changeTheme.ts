import { createAction }    from 'redux-actions';

import { ChangeThemeType } from '@core/types/theme';

export const CHANGE_THEME: ChangeThemeType['type'] = 'core/CHANGE_THEME';
export const changeThemeAction = createAction<ChangeThemeType['payload']>(CHANGE_THEME);
