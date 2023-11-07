import { useEffect }      from 'react';

import type { RefObject } from 'react';

type UseIntersectionOptions = {
	once: boolean
};

type ListenersValue = UseIntersectionOptions & {
	callback(entry: IntersectionObserverEntry): void
};

const defaultIntersectionOptions: IntersectionObserverInit = {
	root      : null,
	rootMargin: '50px',
	threshold : 0
};

const defaultHookOptions = {
	once: false
};

function createIntersectionHook(options: IntersectionObserverInit = defaultIntersectionOptions) {
	let observer: IntersectionObserver | null = null;

	const listeners = new WeakMap<HTMLElement, ListenersValue>();

	const handleIntersections: IntersectionObserverCallback = entries => {
		entries.forEach(entry => {
			let alreadyIntersect = false;
			const hookOptions    = listeners.get(entry.target as HTMLElement);

			if (!alreadyIntersect) {
				hookOptions?.callback(entry);

				if (hookOptions?.once) {
					alreadyIntersect = true;
				}
			}
		});
	};

	const getIntersectionObserver = () => {
		if (!observer) {
			observer = new IntersectionObserver(handleIntersections, options);
		}

		return observer;
	};

	const useIntersection = <T extends RefObject<HTMLElement>>(
		container: T,
		callback: () => void,
		options: UseIntersectionOptions = defaultHookOptions
	) => {
		useEffect(() => {
			const observer = getIntersectionObserver();
			const target   = container.current;

			if (target) {
				observer.observe(target);
				listeners.set(target, {
					callback,
					...options
				});
			}

			return () => {
				if (target) {
					observer.unobserve(target);
					listeners.delete(target);
				}
			};

			// trigger effect when ref already
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [ container.current ]);
	};

	return {
		useIntersection
	};
}

const { useIntersection } = createIntersectionHook();

export { useIntersection, createIntersectionHook };
