import { ComponentType, PropsWithChildren } from 'react';

import { LocalesProvider }                  from './LocalesProvider';

export function withLocales(Component: ComponentType<PropsWithChildren<unknown>>) {
    function LocalesWrapper() {
        return (
            <LocalesProvider>
                <Component />
            </LocalesProvider>
        );
    }

    LocalesWrapper.displayName = 'withLocalesProvider';

    return LocalesWrapper;
}
