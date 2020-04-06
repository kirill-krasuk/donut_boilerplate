import { useEffect, useRef } from 'react';

export function useWhyDidYouUpdate(name: string, props: Record<string, any>): void {
    const previousProps = useRef<Record<string, any>>();

    useEffect(() => {
        if (previousProps.current) {
            const allKeys = Object.keys({ ...previousProps.current, ...props });

            const changesObj = allKeys.reduce((acc, key) => {
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

                return acc;
            }, {});

            if (Object.keys(changesObj).length) {
                console.log('[why-did-you-update]', name, changesObj);
            }
        }

        previousProps.current = props;
    });
}
