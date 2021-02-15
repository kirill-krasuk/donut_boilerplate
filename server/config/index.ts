import { getEnv } from '@server/utils/getEnv';

export default {
    env            : getEnv('NODE_ENV', 'production'),
    host           : getEnv('HOST', '127.0.0.1'),
    port           : getEnv('PORT', '3000'),
    isOpenInBrowser: getEnv('OPEN_IN_BROWSER', false),
    isBuildAnalyzer: getEnv('BUILD_ANALYZE', false),
    analyzerPort   : getEnv('BUNDLE_ANALYZER_PORT', null),
};
