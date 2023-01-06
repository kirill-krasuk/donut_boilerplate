import { useEffect }      from 'react';

import type { RefObject } from 'react';

function useClickOutside<T extends HTMLElement>(
	elementRef: RefObject<T>,
	handler: (event: Event) => void
) {
	useEffect(() => {
		const listener = (event: Event) => {
			if (
				!elementRef.current ||
				elementRef.current.contains(event.target as Node)
			) {
				return;
			}
			handler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ elementRef, handler ]);
}

export { useClickOutside };
