import { ThemedStyledProps } from 'styled-components/macro';

import { theme }             from '../model/theme';
import { Theme }             from './enums';

export type ThemeState = {
    mode: Theme
}

export type AppTheme<T = Record<string, any>> = ThemedStyledProps<T, typeof theme & { mode: Theme, isDark: boolean }>
