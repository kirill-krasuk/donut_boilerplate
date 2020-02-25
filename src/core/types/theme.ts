import { ETheme } from '@core/enums/theme';

export type ChangeTheme = {
    type: 'core/CHANGE_THEME';
    payload: ETheme;
}

export type ThemeState = {
    mode: ETheme;
}
