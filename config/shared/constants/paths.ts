import path                from 'node:path';

import { getPathsFromMap } from '../lib/path';

const clientPathMap = {
    src          : 'src',
    dist         : 'dist',
    entry        : 'src/app/entrypoint.tsx',
    template     : 'src/app/index.pug',
    view         : 'views/index.pug',
    postCssConfig: 'config/css/.postcssrc',
    fonts        : 'src/assets/fonts',
    images       : 'src/assets/images',
    svgs         : 'src/assets/svgs',
} as const;

const serverPathMap = {
    entry : 'server/index.ts',
    output: 'dist'
} as const;

const cachesPathMap = {
    css: '.cache/css-cache'
} as const;

export const paths = {
    client  : getPathsFromMap(clientPathMap),
    server  : getPathsFromMap(serverPathMap),
    caches  : getPathsFromMap(cachesPathMap),
    context : path.resolve(''),
    cacheDir: path.resolve('.cache'),
    tsconfig: path.resolve('tsconfig.json'),
    public  : '/dist/',
    swSrc   : './src/app/service-worker.js',
    swDest  : './sw.js',
    stories : '../../src/**/*.stories.tsx'
};
