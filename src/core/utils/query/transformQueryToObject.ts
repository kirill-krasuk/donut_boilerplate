export const transformQueryToObject = (query: string): Record<string, any> => {
    const qpToArray = query.split('&');

    const obj = qpToArray.reduce((acc, curr) => {
        const [ key, value ] = curr.split('=');

        if ((/%5B%5D/).test(key)) {
            const arrName = key.replace(/%5B%5D/, '');

            acc[arrName] = Array.isArray(acc[arrName])
                ? [ ...acc[arrName], value ]
                : [ value ];

            return acc;
        }

        if ((/%5B[a-zA-Z0-9]+%5D/).test(key)) {
            const [ objName, propName ] = key.replace(/%5D/, '').split('%5B');

            acc[objName] = acc[objName]
                ? { ...acc[objName], [propName]: value }
                : { [propName]: value };

            return acc;
        }

        acc[key] = value;

        return acc;
    }, {});

    return obj;
};
