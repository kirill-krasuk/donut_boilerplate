export function setDataThemeAttribute<T extends string>(theme: T) {
	document.documentElement.className = theme;
}
