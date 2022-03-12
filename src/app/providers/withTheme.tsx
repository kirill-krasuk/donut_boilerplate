import { ComponentType }                          from 'react';
import { ThemeProvider as StyledComponentsTheme } from 'styled-components/macro';

import { theme as themes, Theme }                 from '@config/theme';
import { themeModel }                             from '@features/theme';

export function withTheme<T>(Component: ComponentType<T>) {
    function ThemeProvider(props: T) {
        const theme = themeModel.hooks.useTheme();

        return (
            <StyledComponentsTheme theme={ {
                ...themes,
                mode  : theme,
                isDark: theme === Theme.Dark
            } }
            >
                <Component { ...props } />
            </StyledComponentsTheme>
        );
    }

    ThemeProvider.displayName = `withTheme(${ Component.displayName })`;

    return ThemeProvider;
}
