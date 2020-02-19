export const transformObjectToQuery = (object: Object): string => { // eslint-disable-line
    let query = '';

    function append(key: string, value: any): void {
        query += !query
            ? `${ key }=${ value }`
            : `&${ key }=${ value }`;
    }

    Object.keys(object).forEach((key) => {
        if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
            Object.keys(object[key]).forEach((k) => {
                append(`${ key }[${ k }]`, `${ object[key][k] }`);
            });

            return;
        }

        if (Array.isArray(object[key])) {
            object[key].forEach((k) => { append(`${ key }[]`, k); });

            return;
        }

        append(key, object[key]);
    });

    return query;
};
