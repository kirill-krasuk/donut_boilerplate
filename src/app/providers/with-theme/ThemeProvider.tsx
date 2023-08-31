import { ThemeProvider as StyledComponentsTheme } from 'styled-components';
import { useMemo }                                from 'react';

import { theme as themes, Theme }                 from '@config/theme';
import { themeModel }                             from '@entities/theme';

import type { FC }                                from 'react';

const ThemeProvider: FC = ({ children }) => {
	const theme = themeModel.hooks.useTheme();

	const contextValue = useMemo(
		() => ({
			...themes,
			mode  : theme,
			isDark: theme === Theme.Dark
		}),
		[ theme ]
	);

	return <StyledComponentsTheme theme={ contextValue }>
		{ children }
	</StyledComponentsTheme>;
};

export { ThemeProvider };
