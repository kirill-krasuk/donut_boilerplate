import { EOLocale as T } from 'eo-locale';

import { ToggleTheme }   from '@features/toggle-theme';
import { ToggleLocale }  from '@features/toggle-locale';

import { locales }       from '../../config/locales';
import { ThemedLogo }    from '../themed-logo';
import * as S            from './styles';

import type { VFC }      from 'react';

const Header: VFC = () => (
	<S.Header>
		<S.Nav>
			<ToggleTheme />

			<ToggleLocale />
		</S.Nav>

		<S.Content>
			<ThemedLogo />

			<S.Title>
				<T.Text id={ locales.title } />
			</S.Title>
		</S.Content>
	</S.Header>
);

export default Header;
