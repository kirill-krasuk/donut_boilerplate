/* eslint-disable @typescript-eslint/no-empty-function */
import {
	useEffect,
	useState,
	useCallback
} from 'react';

const mediaSSRMock = {
	matches       : false,
	addListener   : () => {},
	removeListener: () => {}
};

const getMatchedQuery = (q: string) => (__IS_CLIENT__
	? window.matchMedia(q)
	: mediaSSRMock);

function useMedia(queries: string[], values: number[], defaultValue: number) {
	const mediaQueryLists = queries.map(getMatchedQuery);

	const getValue = useCallback(() => {
		const index = mediaQueryLists.findIndex(mql => mql.matches);

		return typeof values[index] !== 'undefined'
			? values[index]
			: defaultValue;
	}, [ defaultValue, mediaQueryLists, values ]);

	const [ value, setValue ] = useState(getValue);

	useEffect(() => {
		const handler = () => {
			setValue(getValue);
		};

		mediaQueryLists.forEach(mql => {
			mql.addListener(handler);
		});

		return () => {
			mediaQueryLists.forEach(mql => {
				mql.removeListener(handler);
			});
		};
	}, [ getValue, mediaQueryLists ]);

	return value;
}

export { useMedia };
