import { useRef, useEffect } from 'react';

export function usePrevious<T>(value: T): undefined | T {
    const ref = useRef<T | undefined>();

    useEffect(() => {
        ref.current = value;
    }, [ value ]);

    if (ref && ref.current) {
        return ref.current;
    }

    return undefined;
}
