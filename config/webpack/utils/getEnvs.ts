import dotenv from 'dotenv';

const { parsed } = dotenv.config();

export function getEnvs() {
    return Object
        .keys(parsed || {})
        .reduce((acc: Record<string, any>, curr) => {
            const envVar = process.env[curr]!;

            return /^(\d+|false|true)$/.test(envVar)
                ? { ...acc, [curr]: JSON.parse(envVar) }
                : { ...acc, [curr]: envVar ? `"${ envVar }"` : null };
        }, {});
}
