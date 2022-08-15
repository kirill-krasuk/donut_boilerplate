import { Sun }               from '@styled-icons/fa-solid/Sun';
import { Moon }              from '@styled-icons/fa-solid/Moon';

import { Theme, themeModel } from '@entities/theme';
import { createFactory }     from '@shared/lib/react';

import * as S                from './styles';

import type { VFC }          from 'react';

const themeIconFactory = createFactory({
	[Theme.Light]: Sun,
	[Theme.Dark] : Moon
});

const ToggleTheme: VFC = () => {
	const { mode, handleChangeTheme } = themeModel.hooks.useThemeMode();

	return (
		<S.ThemeButton>
			{ themeIconFactory(mode, { onClick: handleChangeTheme }) }
		</S.ThemeButton>
	);
};

export { ToggleTheme };
