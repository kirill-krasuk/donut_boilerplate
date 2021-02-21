/* eslint-disable no-console */
import webpack               from 'webpack';
import chalk                 from 'chalk';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';

import { compileTime }       from './compileTime';

function toSeconds(time: number) {
    return (time / 1000).toFixed(2);
}

export default async function (pathToConfig: string) {
    const { default: webpackConfig } = await import(pathToConfig);
    const start                      = Date.now();

    const compiler = webpack(webpackConfig);

    compiler.run((_err, stats) => {
        const compilationTime = Date.now() - start;
        let messages: { errors: any; warnings: any; };

        try {
            if (stats) {
                const rawMessages = stats.toJson({ all: false, warnings: true, errors: true });
                messages          = formatWebpackMessages({
                    errors  : rawMessages!.errors!.map((e) => e.message),
                    warnings: rawMessages!.warnings!.map((e) => e.message),
                });

                if (!messages.errors.length && !messages.warnings.length) {
                    console.log(chalk.black.bgGreen.bold(' PASS '), `Webpack compiled successfully in ${ compileTime(+toSeconds(compilationTime)) }s.`);

                    return;
                }

                if (messages.warnings.length) {
                    messages.warnings.forEach(console.warn);
                    console.log(chalk.black.bgYellow.bold(' WARN '), `Webpack compiled with warnings in ${ toSeconds(compilationTime) }s.`);

                    return;
                }

                if (messages.errors.length) {
                    messages.errors.forEach(console.error);
                    console.log(chalk.black.bgRed.bold(' FAIL '), `Webpack compiled with errors in ${ toSeconds(compilationTime) }s.`);

                    process.exit(1);
                    return;
                }
            }
        } catch (err) {
            console.log(chalk.black.bgRed.bold(' FAIL '), `Webpack compiled with errors in ${ toSeconds(compilationTime) }s.`);

            process.exit(1);
        }
    });
}
