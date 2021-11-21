import { useEffect, useState, useCallback } from 'react';

const mediaSSRMock = {
    matches       : false,
    addListener   : () => undefined,
    removeListener: () => undefined
};

export function useMedia(queries: string[], values: number[], defaultValue: number) {
    const mediaQueryLists = queries.map(q => (
        __IS_CLIENT__
            ? window.matchMedia(q)
            : mediaSSRMock
    ));

    const getValue = useCallback(() => {
        const index = mediaQueryLists.findIndex(mql => mql.matches);

        return (
            typeof values[index] !== 'undefined'
                ? values[index]
                : defaultValue
        );
    }, [ defaultValue, mediaQueryLists, values ]);

    const [ value, setValue ] = useState(getValue);

    useEffect(() => {
        const handler = () => setValue(getValue);

        mediaQueryLists.forEach(mql => mql.addListener(handler));

        return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    }, [ getValue, mediaQueryLists ]);

    return value;
}
