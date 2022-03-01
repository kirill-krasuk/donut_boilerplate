import { createActionCreator } from '@lib/redux';
import { ChangeTheme }         from '@app/types/theme';

export const changeThemeAction = createActionCreator<ChangeTheme>()('core/CHANGE_THEME');
