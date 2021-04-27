import { generateConfig } from './generateConfig';

export default generateConfig(process.env)({
    appEnv         : ({ NODE_ENV }) => NODE_ENV ?? 'production',
    host           : ({ HOST }) => HOST ?? '127.0.0.1',
    port           : ({ PORT }) => PORT ?? '3000',
    api            : ({ API_HOST }) => API_HOST ?? 'https://jsonplaceholder.typicode.com',
    isOpenInBrowser: ({ OPEN_IN_BROWSER }) => OPEN_IN_BROWSER ?? false,
    isBuildAnalyzer: ({ BUILD_ANALYZE }) => BUILD_ANALYZE ?? false,
    analyzerPort   : ({ BUNDLE_ANALYZER_PORT }) => BUNDLE_ANALYZER_PORT ?? null,
    writeToDisk    : ({ WRITE_ASSETS_TO_DISK }) => WRITE_ASSETS_TO_DISK ?? true,
    swEnable       : ({ SERVICE_WORKER_ENABLE }) => SERVICE_WORKER_ENABLE ?? false,
    needHydrate    : ({ HYDRATE }) => HYDRATE ?? true,
});
