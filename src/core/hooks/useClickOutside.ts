import { useEffect } from 'react';
import { fromEvent } from 'rxjs';

export function useClickOutside(ref: any, handler: Function) {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };

        const mouseSubscription = fromEvent(document, 'mousedown')
            .subscribe(listener);
        const touchSubscription = fromEvent(document, 'touchstart')
            .subscribe(listener);

        return () => {
            mouseSubscription.unsubscribe();
            touchSubscription.unsubscribe();
        };
    },  [ ref, handler ]);
}
