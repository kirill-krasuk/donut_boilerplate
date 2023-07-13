import { useEffect, useRef } from 'react';

import type { RefObject }    from 'react';

type Handler = (event: Event) => void;

function useClickOutside<T extends HTMLElement>(
	elementRef: RefObject<T>,
	handler: Handler
) {
	const handlerRef = useRef<Handler>(handler);

	useEffect(() => {
		handlerRef.current = handler;
	}, [ handler ]);

	useEffect(() => {
		const listener = (event: Event) => {
			if (
				!elementRef.current ||
				elementRef.current.contains(event.target as Node)
			) {
				return;
			}
			handlerRef.current(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ elementRef ]);
}

export { useClickOutside };
