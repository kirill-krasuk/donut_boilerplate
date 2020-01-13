// @flow

import { useRef, useEffect } from 'react';

export function usePrevious(value: *): Object {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [ value ]);

    return ref.current;
}
