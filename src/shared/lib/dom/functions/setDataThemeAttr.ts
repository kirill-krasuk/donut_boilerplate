export function setDataThemeAttr<T extends string>(theme: T) {
    document.documentElement.className = theme;
}
