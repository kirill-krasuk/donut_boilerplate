import path from 'path';

export const paths = {
    root         : path.resolve(__dirname, '../..', 'public/root'),
    dist         : path.resolve(__dirname, '../..', 'dist'),
    public       : path.resolve(__dirname, '../..', 'public'),
    serviceWorker: path.resolve(__dirname, '../..', 'dist/sw.js'),
    images       : {
        static : path.resolve(__dirname, '../..', 'public/images'),
        builded: path.resolve(__dirname, '../..', 'public/images/build')
    },
    fonts  : path.resolve(__dirname, '../..', 'fonts/images/build'),
    favicon: path.resolve(__dirname, '../..', 'public/images/favicon.ico')
} as const;
