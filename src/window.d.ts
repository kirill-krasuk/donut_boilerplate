declare global {
	interface Window {
		__PRELOADED_STATE__: Record<string, any>;
	}
}

export {};
