import { ThemedStyledProps } from 'styled-components/macro';

import { theme }             from '@core/config/theme';
import { ETheme }            from '@core/enums/theme';

export type ChangeTheme = {
    type: 'core/CHANGE_THEME';
    payload: ETheme;
}

export type ThemeState = {
    mode: ETheme;
}

export type ThemedStyled<T = {}> = ThemedStyledProps<T, typeof theme & { mode: ETheme }>
