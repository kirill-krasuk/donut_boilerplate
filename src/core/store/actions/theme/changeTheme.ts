import { createActionCreator } from '@core/utils/redux/action';
import { ChangeTheme }         from '@core/types/theme';

export const changeThemeAction = createActionCreator('core/CHANGE_THEME')<ChangeTheme['payload']>();
