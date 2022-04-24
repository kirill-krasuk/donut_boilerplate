import type webpack from 'webpack';

const createCompilationPromise = (compiler: webpack.Compiler): Promise<void> =>
	new Promise((resolve, reject) => {
		compiler.hooks.done.tap('Compilation_Promise', stats => {
			if (!stats.hasErrors()) {
				resolve();

				return;
			}

			reject(new Error('Compilation error'));
		});
	});

export { createCompilationPromise };
