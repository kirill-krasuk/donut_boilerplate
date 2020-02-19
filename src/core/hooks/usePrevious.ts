// @flow

import { useRef, useEffect } from 'react';

export function usePrevious(value: any): Record<string, any> {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [ value ]);

    return ref.current;
}
