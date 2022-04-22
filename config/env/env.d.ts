declare global {
	namespace NodeJS {
		interface ProcessEnv {
			APP_NAME?: string;
			NODE_ENV?: 'development' | 'production';
			WEBPACK_DEV_STATS?:
				| 'detailed'
				| 'errors-only'
				| 'errors-warnings'
				| 'minimal'
				| 'normal'
				| 'summary'
				| 'verbose';
			USE_CRITICAL_CSS_OPTIMIZE?: boolean;
			HOST?: string;
			PORT?: number;
			API_HOST?: string;
			SERVICE_WORKER_ENABLE?: boolean;
			HYDRATE?: boolean;
			OPEN_IN_BROWSER?: boolean;
			WRITE_ASSETS_TO_DISK?: boolean;
			DOCKER_TAG?: string;
			DOCKER_CONFIG_PATH?: string;
			DOCKER_CONTAINER_NAME?: string;
			BUILD_ANALYZE?: boolean;
			BUNDLE_ANALYZER_PORT?: number;
		}
	}
}

export {};
