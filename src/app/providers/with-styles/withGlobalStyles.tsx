import { ComponentType } from 'react';

import { GlobalStyles }  from './GlobalStyles';

export function withGlobalStyles(Component: ComponentType) {
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
