import { Theme } from '@app/enums/theme';

export function setDataThemeAttr(theme: Theme) {
    document.documentElement.className = theme;
}
