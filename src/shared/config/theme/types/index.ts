import type { ThemedStyledProps } from 'styled-components/macro';
import type { theme }             from '../theme';
import type { Theme }             from './enums';

export type AppTheme<T = Record<string, any>> = ThemedStyledProps<
	T,
	typeof theme & { mode: Theme, isDark: boolean }
>;
