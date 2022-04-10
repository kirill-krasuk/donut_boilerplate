import { ComponentType, PropsWithChildren } from 'react';

import { ThemeProvider }                    from './ThemeProvider';

export function withTheme(Component: ComponentType<PropsWithChildren<unknown>>) {
    function ThemeProviderWrapper() {
        return (
            <ThemeProvider>
                <Component />
            </ThemeProvider>
        );
    }

    ThemeProviderWrapper.displayName = 'withTheme';

    return ThemeProviderWrapper;
}
