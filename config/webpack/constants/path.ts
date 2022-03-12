import path                from 'path';

import { getPathsFromMap } from '../utils/getPathsFromMap';

const clientPathMap = {
    src          : 'src',
    dist         : 'dist',
    entry        : 'src/app/entrypoint.tsx',
    template     : 'src/app/index.pug',
    view         : 'dist/index.pug',
    postCssConfig: 'config/css/.postcssrc',
    fonts        : 'src/assets/fonts',
    images       : 'src/assets/images',
    svgs         : 'src/assets/svgs',
} as const;

const serverPathMap = {
    entry : 'server/index.ts',
    output: 'dist'
} as const;

export const paths = {
    client  : getPathsFromMap(clientPathMap),
    server  : getPathsFromMap(serverPathMap),
    context : path.resolve(''),
    cacheDir: path.resolve('.cache')
};
