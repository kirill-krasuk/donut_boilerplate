import chalk           from 'chalk';

import type { Server } from 'node:http';

const createExitHandler = (server: Server) => (signal: NodeJS.Signals) => {
	console.info(chalk`\n{black.bgBlue.bold  INFO } {green.bold ${ signal }} received.`);

	server.close();

	/**
	 * delay the process exit for a second
	 * to deliver a server close event
	 */
	setTimeout(() => {
		process.exit(0);
	}, 1000);
};

export { createExitHandler };
