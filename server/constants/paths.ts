import path from 'node:path';

export const paths = {
	root         : path.resolve('public/root'),
	dist         : path.resolve('dist'),
	public       : path.resolve('public'),
	serviceWorker: path.resolve('dist/sw.js'),
	images       : {
		static : path.resolve('public/images'),
		builded: path.resolve('public/images/build'),
	},
	fonts     : path.resolve('fonts/images/build'),
	favicon   : path.resolve('public/images/favicon.ico'),
	staticDist: '/dist/',
} as const;
