import { createActionCreator } from '@utils/redux/action-creator';
import { ChangeTheme }         from '@app/types/theme';

export const changeThemeAction = createActionCreator<ChangeTheme>()('core/CHANGE_THEME');
