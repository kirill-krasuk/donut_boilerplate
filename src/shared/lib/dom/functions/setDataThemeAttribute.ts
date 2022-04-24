const setDataThemeAttribute = <T extends string>(theme: T) => {
	document.documentElement.className = theme;
};

export { setDataThemeAttribute };
