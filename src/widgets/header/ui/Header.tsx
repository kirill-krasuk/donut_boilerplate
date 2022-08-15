import { EOLocale as T }     from 'eo-locale';

import { createFactory }     from '@lib/react';
import { Theme, themeModel } from '@entities/theme';
import { ToggleTheme }       from '@features/toggle-theme';
import { ToggleLocale }      from '@features/toggle-locale';

import { locales }           from '../config/locales';
import * as S                from './styles';

import type { VFC }          from 'react';

const themeLogoFactory = createFactory({
	[Theme.Dark] : S.Logo,
	[Theme.Light]: S.DarkLogo
});

const Header: VFC = () => {
	const { mode } = themeModel.hooks.useThemeMode();

	return (
		<S.Header>
			<S.Nav>
				<ToggleTheme />

				<ToggleLocale />
			</S.Nav>

			<S.Content>
				{ themeLogoFactory(mode) }

				<S.Title>
					<T.Text id={ locales.title } />
				</S.Title>
			</S.Content>
		</S.Header>
	);
};

export default Header;
