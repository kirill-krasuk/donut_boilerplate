import { createAction } from '@reduxjs/toolkit';

import type { Theme }   from '@config/theme';

const changeTheme             = createAction<Theme>('theme/CHANGE_THEME');
const changePreferColorScheme = createAction<Theme>('theme/CHANGE_PREFER_COLOR_SCHEME');

export { changePreferColorScheme, changeTheme };
