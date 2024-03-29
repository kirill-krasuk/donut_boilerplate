/* eslint-disable unicorn/prefer-object-from-entries */
import { useEffect, useRef } from 'react';

function useWhyDidYouUpdate(name: string, props: Record<string, any>) {
	const previousProps = useRef<Record<string, any>>();

	useEffect(() => {
		if (previousProps.current) {
			const allKeys = Reflect.ownKeys({
				...previousProps.current,
				...props
			});

			const changesObject = allKeys.reduce((acc, key) => {
				if (typeof key !== 'symbol' && previousProps?.current) {
					if (previousProps.current[key] !== props[key]) {
						return {
							...acc,
							[key]: {
								from: previousProps.current[key],
								to  : props[key]
							}
						};
					}

					return acc;
				}

				return acc;
			}, {});

			if (Reflect.ownKeys(changesObject).length) {
				// eslint-disable-next-line no-console
				console.log('[why-did-you-update]', name, changesObject);
			}
		}

		previousProps.current = props;
	});
}

export { useWhyDidYouUpdate };
