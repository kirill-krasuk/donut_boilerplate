import { Request, Response } from 'express';
import * as log4js           from 'log4js';

const logger = log4js.getLogger();

log4js.configure({
    appenders : { cheese: { type: 'file', filename: 'error.log' } },
    categories: { default: { appenders: [ 'cheese' ], level: 'error' } }
});

export function errorLogging(req: Request, res: Response): void {
    const { stack } = req.body;

    const err = stack.join('\n');

    logger.error(err);

    res.sendStatus(200);
}
