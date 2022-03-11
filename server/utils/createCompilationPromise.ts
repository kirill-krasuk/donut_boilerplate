import webpack from 'webpack';

export function createCompilationPromise(compiler: webpack.Compiler): Promise<void> {
    return new Promise((resolve, reject) => {
        compiler.hooks.done.tap('dev', (stats) => {
            if (!stats.hasErrors()) {
                resolve();
            } else {
                reject();
            }
        });
    });
}
