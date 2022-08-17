import { Theme, themeModel } from '@entities/theme';
import { createFactory }     from '@lib/react';

import * as S                from './styles';

const themeLogoFactory = createFactory({
	[Theme.Dark] : S.Logo,
	[Theme.Light]: S.DarkLogo
});

const ThemedLogo = () => {
	const { mode } = themeModel.hooks.useThemeMode();

	return <>
		{ themeLogoFactory(mode) }
	</>;
};

export { ThemedLogo };
