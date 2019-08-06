const log4js = require('log4js');

const logger = log4js.getLogger();

log4js.configure({
    appenders : { cheese: { type: 'file', filename: 'error.log' } },
    categories: { default: { appenders: [ 'cheese' ], level: 'error' } }
});


function errorLogging(req, res) {
    const { stack } = req.body;

    const err = stack.join('\n');

    logger.error(err);

    res.sendStatus(200);
}

module.exports = errorLogging;
