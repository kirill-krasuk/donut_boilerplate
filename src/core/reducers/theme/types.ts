import { ChangeThemeType } from '@core/types/theme';

export type StateType = {
    mode: 'light' | 'dark'
}

export type ActionType = ChangeThemeType['payload'];
