import { ChangeTheme, ThemeState } from '@core/types/theme';

export type State = ThemeState;

export type Action = ChangeTheme['payload'];
