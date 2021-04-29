import { createActionCreator } from '@core/utils/redux/action';
import { ChangeTheme }         from '@core/types/theme';

export const changeThemeAction = createActionCreator<ChangeTheme>()('core/CHANGE_THEME');
