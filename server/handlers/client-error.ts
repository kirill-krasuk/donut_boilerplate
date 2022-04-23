import fs                         from 'node:fs';
import path                       from 'node:path';
import * as log4js                from 'log4js';

import type { Request, Response } from 'express';

function handleClientError(req: Request, res: Response): void {
	const logger       = log4js.getLogger();
	const logDirectory = path.resolve('../../logs');

	if (!fs.existsSync(logDirectory)) {
		fs.mkdirSync(logDirectory);
	}

	log4js.configure({
		appenders: {
			cheese: {
				type    : 'file',
				filename: path.resolve(logDirectory, 'app_errors.log')
			}
		},
		categories: {
			default: {
				appenders: [ 'cheese' ],
				level    : 'error'
			}
		}
	});

	const { stack } = req.body;
	const error     = stack.join('\n');

	logger.error(error);

	res.sendStatus(200);
}

export { handleClientError };
