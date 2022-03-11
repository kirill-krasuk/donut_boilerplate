import webpack from 'webpack';

export function createCompilationPromise(compiler: webpack.Compiler): Promise<void> {
    return new Promise((resolve) => {
        compiler.hooks.done.tap('dev', (stats) => {
            if (!stats.hasErrors()) {
                resolve();
            } else {
                // make delay for server down with error
                // end output compilation status in stdout
                setTimeout(() => {
                    process.exit(1);
                }, 100);
            }
        });
    });
}
