import * as getters from './getters';

export const clientScheme = {
    appEnv     : getters.getNodeEnv,
    api        : getters.getApiHost,
    swEnable   : getters.getServiceWorkerEnable,
    needHydrate: getters.getHydrate,
};

export const serverScheme = {
    appEnv         : getters.getNodeEnv,
    host           : getters.getHost,
    port           : getters.getPort,
    api            : getters.getApiHost,
    isOpenInBrowser: getters.getOpeInBrowser,
    isBuildAnalyzer: getters.getBuildAnalyze,
    analyzerPort   : getters.getBundleAnalyzerPort,
    writeToDisk    : getters.getWriteToDisk,
};
