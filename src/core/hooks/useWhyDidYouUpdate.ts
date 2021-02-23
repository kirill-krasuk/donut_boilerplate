import { useEffect, useRef } from 'react';

export function useWhyDidYouUpdate(name: string, props: Record<string, any>) {
    const previousProps = useRef<Record<string, any>>();

    useEffect(() => {
        if (previousProps.current) {
            const allKeys = Reflect.ownKeys({ ...previousProps.current, ...props });

            const changesObj = allKeys.reduce((acc, key) => {
                if (typeof key !== 'symbol') {
                    if (previousProps && previousProps.current) {
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
                }

                return acc;
            }, {});

            if (Reflect.ownKeys(changesObj).length) {
                // eslint-disable-next-line no-console
                console.log('[why-did-you-update]', name, changesObj);
            }
        }

        previousProps.current = props;
    });
}
