import { Server } from 'http';
import chalk      from 'chalk';

export const createExitHandler = (server: Server) => (signal: NodeJS.Signals) => {
    console.info(`\n${ chalk.black.bgBlue.bold(' INFO ') } ${ chalk.green.bold(signal) } received.`);

    server.close();

    // delay the process exit for a second
    // to deliver a server close event
    setTimeout(() => {
        process.exit(0);
    }, 1000);
};
