import { Request, Response } from 'express';
import * as log4js           from 'log4js';
import fs                    from 'fs';
import path                  from 'path';

export function errorLogging(req: Request, res: Response): void {
    const logDir = path.resolve('../../logs');

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    const logger = log4js.getLogger();

    log4js.configure({
        appenders : { cheese: { type: 'file', filename: path.resolve(logDir, 'app_errors.log') } },
        categories: { default: { appenders: [ 'cheese' ], level: 'error' } }
    });

    const { stack } = req.body;

    const err = stack.join('\n');

    logger.error(err);

    res.sendStatus(200);
}
