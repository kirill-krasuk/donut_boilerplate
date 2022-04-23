import { useRef, useEffect } from 'react';

function usePrevious<T>(value: T) {
	const ref = useRef<T | undefined>();

	useEffect(() => {
		ref.current = value;
	}, [ value ]);

	if (ref?.current) {
		return ref.current;
	}
}

export { usePrevious };
