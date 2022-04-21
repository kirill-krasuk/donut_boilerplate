import { ThemeProvider as StyledComponentsTheme } from 'styled-components/macro';

import { theme as themes, Theme }                 from '@config/theme';
import { themeModel }                             from '@features/theme';

import type { FC, PropsWithChildren }             from 'react';

export const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const theme = themeModel.hooks.useTheme();

    return (
        <StyledComponentsTheme theme={ {
            ...themes,
            mode  : theme,
            isDark: theme === Theme.Dark
        } }
        >
            { children }
        </StyledComponentsTheme>
    );
};
