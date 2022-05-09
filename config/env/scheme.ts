import * as getters from './getters';

const clientScheme = {
	appEnv     : getters.getNodeEnv,
	api        : getters.getApiHost,
	swEnable   : getters.getServiceWorkerEnable,
	needHydrate: getters.getHydrate
};

const serverScheme = {
	appEnv                : getters.getNodeEnv,
	host                  : getters.getHost,
	port                  : getters.getPort,
	api                   : getters.getApiHost,
	isOpenInBrowser       : getters.getOpeInBrowser,
	isBuildAnalyzer       : getters.getBuildAnalyze,
	analyzerPort          : getters.getBundleAnalyzerPort,
	writeToDisk           : getters.getWriteToDisk,
	useCriticalCSSOptimize: getters.getUseCriticalCSSOptimize,
	serverSideEngine      : getters.getServerSideEngine
};

export { clientScheme, serverScheme };
