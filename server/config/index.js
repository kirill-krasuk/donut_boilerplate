const getEnv = require('../utils/getEnv');

module.exports = {
    env : getEnv('NODE_ENV', 'production'),
    host: getEnv('HOST', '127.0.0.1'),
    port: getEnv('PORT', '3000')
};
