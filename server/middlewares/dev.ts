/* eslint-disable @typescript-eslint/no-empty-function */
import webpack                      from 'webpack';
import DevMiddleware                from 'webpack-dev-middleware';
import HotMiddleware                from 'webpack-hot-middleware';

import { headers }                  from '@server/constants/headers';
import { createCompilationPromise } from '@server/lib/webpack';

import webpackConfig                from '../../config/webpack/webpack.dev';

import type { Application }         from 'express';

// const { writeToDisk } = env.server;

const fileExtensionsToWrite = /\.(jpe?g|webp|png|svg|gif|ttf|otf|woff|woff2)$/;
const filesToWrite          = [ 'sw.js', 'index.pug' ];

function useDevMiddlewares(app: Application) {
	const { sw, isCacheable } = headers;

	const [ swKey, swValue ]                   = sw;
	const [ isCacheableKey, isCacheableValue ] = isCacheable;

	const compiler = webpack(webpackConfig, () => {});

	const devMiddleware = DevMiddleware(compiler, {
		publicPath      : webpackConfig.output?.publicPath,
		stats           : webpackConfig.stats,
		serverSideRender: true,
		headers         : {
			[swKey]         : [ swValue ],
			[isCacheableKey]: [ isCacheableValue ]
		},
		writeToDisk: (filePath: string) =>
			fileExtensionsToWrite.test(filePath) ||
			filesToWrite.some(file => filePath.endsWith(file))
	});

	app.use(devMiddleware);
	app.use(HotMiddleware(compiler));

	return createCompilationPromise(compiler);
}

export { useDevMiddlewares };
