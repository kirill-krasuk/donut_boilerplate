import { GlobalStyles }                          from './GlobalStyles';

import type { ComponentType, PropsWithChildren } from 'react';

export function withGlobalStyles(Component: ComponentType<PropsWithChildren<unknown>>) {
    function StylesProvider() {
        return (
            <>
                <GlobalStyles />

                <Component />
            </>
        );
    }

    StylesProvider.displayName = 'withGlobalStyles';

    return StylesProvider;
}
