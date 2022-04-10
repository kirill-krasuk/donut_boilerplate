import { ComponentType, PropsWithChildren } from 'react';

import { GlobalStyles }                     from './GlobalStyles';

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
