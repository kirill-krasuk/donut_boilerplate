/* eslint-disable unicorn/prefer-object-from-entries */
import dotenv from 'dotenv';

const { parsed } = dotenv.config();

export function getEnvironmentVariables() {
    return Object
        .keys(parsed || {})
        .reduce((acc: Record<string, any>, curr) => {
            const envVariable = process.env[curr]!;

            return /^(\d+|false|true)$/.test(envVariable)
                ? { ...acc, [curr]: JSON.parse(envVariable) }
                : { ...acc, [curr]: envVariable ? `"${ envVariable }"` : null };
        }, {});
}
