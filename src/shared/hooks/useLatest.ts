import {
	useRef,
	useLayoutEffect,
	useEffect
} from 'react';

const useIsomorphicEffect = __IS_CLIENT__
	? useLayoutEffect
	: useEffect;

function useLatest<T>(value: T) {
	const ref = useRef(value);

	useIsomorphicEffect(() => {
		ref.current = value;
	}, [ value ]);

	return ref;
}

export { useLatest };
