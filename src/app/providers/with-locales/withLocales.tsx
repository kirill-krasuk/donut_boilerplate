import { ComponentType }   from 'react';

import { LocalesProvider } from './LocalesProvider';

export function withLocales(Component: ComponentType) {
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
