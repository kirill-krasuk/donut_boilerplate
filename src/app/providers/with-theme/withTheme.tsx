import { ComponentType } from 'react';

import { ThemeProvider } from './ThemeProvider';

export function withTheme(Component: ComponentType) {
    function ThemeProviderWrapper() {
        return (
            <ThemeProvider>
                <Component />
            </ThemeProvider>
        );
    }

    ThemeProviderWrapper.displayName = `withTheme(${ Component.displayName })`;

    return ThemeProviderWrapper;
}
