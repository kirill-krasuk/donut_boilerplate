import type yargs from 'yargs';

export const bundleToolArgs: Record<string, yargs.Options> = {
	c: {
		alias: 'config',
		type : 'string'
	}
};
