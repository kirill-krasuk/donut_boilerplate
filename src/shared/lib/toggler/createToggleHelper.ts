function createToggleHelper<T extends Record<string, any>>(object: T) {
	return function <K extends keyof T> (key: K) {
		return object[key];
	};
}

export { createToggleHelper };
