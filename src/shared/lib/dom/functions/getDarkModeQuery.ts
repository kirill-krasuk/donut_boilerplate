const getDarkModeQuery = () =>
	(__IS_CLIENT__
		? window.matchMedia('(prefers-color-scheme: dark)')
		: null);

export { getDarkModeQuery };
