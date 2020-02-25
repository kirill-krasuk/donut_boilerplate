import { ChangeTheme } from '@core/types/theme';

export type State = {
    mode: 'light' | 'dark';
}

export type Action = ChangeTheme;
