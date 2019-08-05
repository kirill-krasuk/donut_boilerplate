// @flow

export const transformObjectToQuery = (object: { [key: string]: string }, qpInstance: URLSearchParams): void => { // eslint-disable-line
    Object.keys(object).forEach((key) => {
        if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
            Object.keys(object[key]).forEach((k) => {
                qpInstance.set(`${ key }[${ k }]`, `${ object[key][k] }`);
            });

            return;
        }

        if (Array.isArray(object[key])) {
            object[key].forEach((k) => { qpInstance.append(`${ key }[]`, k); });

            return;
        }

        qpInstance.set(key, object[key]);
    });
};
