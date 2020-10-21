import dotenv from 'dotenv';

const { parsed } = dotenv.config();

export function collectEnvVars() {
    return Object
        .keys(parsed || {})
        .reduce((acc: Record<string, any>, curr) => {
            acc[curr] = JSON.stringify(process.env[curr]);

            return acc;
        }, {});
}
