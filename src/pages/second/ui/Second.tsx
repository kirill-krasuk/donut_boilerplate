import { EOLocale as T } from 'eo-locale';

import { routes }        from '@config/routes';
import { Header }        from '@widgets/header';

import { locales }       from '../config/locales';
import * as S            from './styles';

import type { VFC }      from 'react';

const CodePath = (
	<code>
		<T.Text id={ locales.path } />
	</code>
);

const Second: VFC = () => (
	<>
		<Header />

		<S.Container>
			<S.Text>
				<T.Text html id={ locales.title } path={ CodePath } />
			</S.Text>

			<S.Link to={ routes.home.path }>
				<T.Text id={ locales.toHome } />
			</S.Link>

			<S.Link to={ routes.protect.path }>
				<T.Text id={ locales.toProtect } />
			</S.Link>
		</S.Container>
	</>
);

export default Second;
