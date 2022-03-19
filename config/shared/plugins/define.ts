import webpack     from 'webpack';

import { getEnvs } from '../lib/env';

type Options = {
    mode: 'development' | 'none' | 'production',
    isClient: boolean
}

export function definePlugin({ mode, isClient }: Options) {
    const _mode = mode === 'none'
        ? 'development'
        : mode;

    return new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(mode), ...getEnvs() },
        __IS_DEV__   : _mode === 'development',
        __IS_PROD__  : _mode === 'production',
        __IS_SERVER__: !isClient,
        __IS_CLIENT__: isClient
    });
}
