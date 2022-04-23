import type { ThemedStyledProps } from 'styled-components/macro';
import type { theme }             from '../theme';
import type { Theme }             from './enums';

type AppTheme<T = Record<string, any>> = ThemedStyledProps<
	T,
	typeof theme & { mode: Theme, isDark: boolean }
>;

export type { AppTheme };
