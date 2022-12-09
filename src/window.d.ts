declare global {
	interface Window {
		__PRELOADED_STATE__: Record<string, any>;
		__INITIAL_PROPS__: Record<string, any>;
	}
}

export {};
