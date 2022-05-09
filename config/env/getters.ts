const getNodeEnv = ({ NODE_ENV }: NodeJS.ProcessEnv) => NODE_ENV ?? 'production';
const getHost    = ({ HOST }: NodeJS.ProcessEnv) => HOST ?? '127.0.0.1';
const getPort    = ({ PORT }: NodeJS.ProcessEnv) => PORT ?? '3000';

const getServerSideEngine       = ({ SERVER_SIDE_ENGINE }: NodeJS.ProcessEnv) =>
	SERVER_SIDE_ENGINE ?? 'express';
const getApiHost                = ({ API_HOST }: NodeJS.ProcessEnv) =>
	API_HOST ?? 'https://jsonplaceholder.typicode.com';
const getOpeInBrowser           = ({ OPEN_IN_BROWSER }: NodeJS.ProcessEnv) =>
	OPEN_IN_BROWSER ?? false;
const getBuildAnalyze           = ({ BUILD_ANALYZE }: NodeJS.ProcessEnv) => BUILD_ANALYZE ?? false;
const getBundleAnalyzerPort     = ({ BUNDLE_ANALYZER_PORT }: NodeJS.ProcessEnv) =>
	BUNDLE_ANALYZER_PORT ?? null;
const getWriteToDisk            = ({ WRITE_ASSETS_TO_DISK }: NodeJS.ProcessEnv) =>
	WRITE_ASSETS_TO_DISK ?? true;
const getServiceWorkerEnable    = ({ SERVICE_WORKER_ENABLE }: NodeJS.ProcessEnv) =>
	SERVICE_WORKER_ENABLE ?? false;
const getHydrate                = ({ HYDRATE }: NodeJS.ProcessEnv) => HYDRATE ?? true;
const getUseCriticalCSSOptimize = ({ USE_CRITICAL_CSS_OPTIMIZE }: NodeJS.ProcessEnv) =>
	USE_CRITICAL_CSS_OPTIMIZE ?? false;

export {
	getNodeEnv,
	getHost,
	getPort,
	getApiHost,
	getOpeInBrowser,
	getBuildAnalyze,
	getServerSideEngine,
	getBundleAnalyzerPort,
	getWriteToDisk,
	getServiceWorkerEnable,
	getUseCriticalCSSOptimize,
	getHydrate
};
