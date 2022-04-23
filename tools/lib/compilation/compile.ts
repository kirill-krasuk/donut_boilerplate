/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
import webpack                                   from 'webpack';
import chalk                                     from 'chalk';
import formatWebpackMessages                     from 'react-dev-utils/formatWebpackMessages';

import { compilationTime as getCompilationTime } from './time';

function toSeconds(time: number) {
	return (time / 1000).toFixed(2);
}

const createCallback =
	(env: string, start: number) => (_error: Error, stats: webpack.Stats) => {
		const compilationTime = Date.now() - start;
		let messages: { errors: any, warnings: any };

		try {
			if (stats) {
				const rawMessages = stats.toJson({
					all     : false,
					warnings: true,
					errors  : true
				});
				messages          = formatWebpackMessages({
					errors  : rawMessages!.errors!.map(error => error.message),
					warnings: rawMessages!.warnings!.map(warning => warning.message)
				});

				if (!messages.errors.length && !messages.warnings.length) {
					console.log(
						chalk`{black.bgGreen.bold  PASS } Webpack compiled {blue.bold ${ env }} successfully in ${ getCompilationTime(
							+toSeconds(compilationTime)
						) }s.`
					);

					return;
				}

				if (messages.warnings.length) {
					messages.warnings.forEach(console.warn);
					console.log(
						chalk`{black.bgYellow.bold  WARN } Webpack compiled {blue.bold ${ env }} with warnings in ${ toSeconds(
							compilationTime
						) }s.`
					);

					return;
				}

				if (messages.errors.length) {
					messages.errors.forEach(console.error);
					console.error(
						chalk`{black.bgRed.bold  FAIL } Webpack compiled {blue.bold ${ env }} with errors in ${ toSeconds(
							compilationTime
						) }s.`
					);

					process.exit(1);
					return;
				}
			}
		} catch {
			console.error(
				chalk`{black.bgRed.bold  FAIL } Webpack compiled {blue.bold ${ env }} with errors in ${ toSeconds(
					compilationTime
				) }s.`
			);

			process.exit(1);
		}
	};

export async function compileApp(pathToConfig: string) {
	const { default: webpackConfig, __IS_SERVER__ } = await import(pathToConfig);
	const start                                     = Date.now();

	const env = __IS_SERVER__ ? 'SERVER' : 'CLIENT';

	const callback = createCallback(env, start);

	const compiler = webpack(webpackConfig, callback as any);

	compiler.run(() => {});
}
