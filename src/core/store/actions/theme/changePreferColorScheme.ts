import { createActionCreator }     from '@utils/redux/action-creator';
import { ChangePreferColorScheme } from '@app/types/theme';

export const changePreferColorScheme = createActionCreator<ChangePreferColorScheme>()('core/CHANGE_PREFER_COLOR_SCHEME');
