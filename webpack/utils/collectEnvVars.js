const dotenv = require('dotenv');

const { parsed } = dotenv.config();

function collectEnvVars() {
    return Object
        .keys(parsed)
        .reduce((acc, curr) => {
            acc[curr] = JSON.stringify(process.env[curr]);

            return acc;
        }, {});
}

module.exports = { collectEnvVars };
