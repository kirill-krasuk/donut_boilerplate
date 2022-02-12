import { Theme } from '@core/enums/theme';

export function setDataThemeAttr(theme: Theme) {
    document.documentElement.className = theme;
}
