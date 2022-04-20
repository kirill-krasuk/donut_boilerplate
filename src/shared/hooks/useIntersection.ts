import { useEffect, RefObject } from 'react';

type UseIntersectionOptions = {
    once: boolean
}

type ListenersValue = UseIntersectionOptions & {
    callback(): void
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

    const handleIntersections: IntersectionObserverCallback = (entries) => {
        entries.forEach(entry => {
            let alreadyIntersect = false;

            if (entry.isIntersecting && !alreadyIntersect) {
                const hookOptions = listeners.get(entry.target as HTMLElement);

                if (hookOptions) {
                    hookOptions.callback();

                    alreadyIntersect = hookOptions.once;
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

export {
    useIntersection,
    createIntersectionHook
};
