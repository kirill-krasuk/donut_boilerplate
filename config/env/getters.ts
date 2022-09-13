const getNodeEnv                = ({ NODE_ENV }: Readonly<NodeJS.ProcessEnv>) =>
	NODE_ENV ?? 'production';
const getHost                   = ({ HOST }: Readonly<NodeJS.ProcessEnv>) => HOST ?? '127.0.0.1';
const getPort                   = ({ PORT }: Readonly<NodeJS.ProcessEnv>) => PORT ?? '3000';
const getServerSideEngine       = ({ SERVER_SIDE_ENGINE }: Readonly<NodeJS.ProcessEnv>) =>
	SERVER_SIDE_ENGINE ?? 'express';
const getApiHost                = ({ API_HOST }: Readonly<NodeJS.ProcessEnv>) =>
	API_HOST ?? 'https://jsonplaceholder.typicode.com';
const getOpeInBrowser           = ({ OPEN_IN_BROWSER }: Readonly<NodeJS.ProcessEnv>) =>
	OPEN_IN_BROWSER ?? false;
const getBuildAnalyze           = ({ BUILD_ANALYZE }: Readonly<NodeJS.ProcessEnv>) =>
	BUILD_ANALYZE ?? false;
const getBundleAnalyzerPort     = ({ BUNDLE_ANALYZER_PORT }: Readonly<NodeJS.ProcessEnv>) =>
	BUNDLE_ANALYZER_PORT ?? null;
const getWriteToDisk            = ({ WRITE_ASSETS_TO_DISK }: Readonly<NodeJS.ProcessEnv>) =>
	WRITE_ASSETS_TO_DISK ?? true;
const getServiceWorkerEnable    = ({ SERVICE_WORKER_ENABLE }: Readonly<NodeJS.ProcessEnv>) =>
	SERVICE_WORKER_ENABLE ?? false;
const getHydrate                = ({ HYDRATE }: Readonly<NodeJS.ProcessEnv>) => HYDRATE ?? true;
const getUseCriticalCSSOptimize = ({
	USE_CRITICAL_CSS_OPTIMIZE
}: Readonly<NodeJS.ProcessEnv>) => USE_CRITICAL_CSS_OPTIMIZE ?? false;

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
