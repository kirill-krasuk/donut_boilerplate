import { createActionCreator } from '@utils/redux/action-creator';
import { ChangeTheme }         from '@core/types/theme';

export const changeThemeAction = createActionCreator<ChangeTheme>()('core/CHANGE_THEME');
