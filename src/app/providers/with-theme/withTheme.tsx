import { ThemeProvider }                         from './ThemeProvider';

import type { ComponentType, PropsWithChildren } from 'react';

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
