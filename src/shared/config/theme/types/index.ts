import { ThemedStyledProps } from 'styled-components/macro';

import { theme }             from '../theme';
import { Theme }             from './enums';

export type AppTheme<T = Record<string, any>> = ThemedStyledProps<T, typeof theme & { mode: Theme, isDark: boolean }>
