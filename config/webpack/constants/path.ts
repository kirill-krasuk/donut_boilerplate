import path from 'path';

export const paths = {
    src          : path.resolve('src'),
    dist         : path.resolve('dist'),
    entry        : path.resolve('src/core/index.tsx'),
    template     : path.resolve('src/core/index.pug'),
    view         : path.resolve('dist/index.pug'),
    postCssConfig: path.resolve('config/css/.postcssrc'),
    fonts        : path.resolve('assets/fonts'),
    images       : path.resolve('assets/images'),
    svgs         : path.resolve('assets/svgs'),
};
