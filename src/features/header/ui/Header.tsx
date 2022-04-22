import { EOLocale as T }     from 'eo-locale';
import { Sun }               from '@styled-icons/fa-solid/Sun';
import { Moon }              from '@styled-icons/fa-solid/Moon';

import { createFactory }     from '@lib/react';
import { Theme, themeModel } from '@entities/theme';
import { localeModel }       from '@entities/locale';

import { locales }           from '../config/locales';
import * as S                from './styles';

import type { FC }           from 'react';

const themeIconFactory = createFactory({
	[Theme.Light]: Sun,
	[Theme.Dark] : Moon
});

const themeLogoFactory = createFactory({
	[Theme.Dark] : S.Logo,
	[Theme.Light]: S.DarkLogo
});

const Header: FC = () => {
	const { locale, handleChangeLocale } = localeModel.hooks.useLocale();
	const { mode, handleChangeTheme }    = themeModel.hooks.useThemeMode();

	return (
		<S.Header>
			<S.Nav>
				<S.ThemeIcon>{ themeIconFactory(mode, { onClick: handleChangeTheme }) }</S.ThemeIcon>

				<S.LocaleToggler onClick={ handleChangeLocale }>{ locale }</S.LocaleToggler>
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
