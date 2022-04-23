import type yargs from 'yargs';

const bundleToolArgs: Record<string, yargs.Options> = {
	c: {
		alias: 'config',
		type : 'string'
	}
};

export { bundleToolArgs };
