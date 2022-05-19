import { EOLocale as T } from 'eo-locale';

import { routes }        from '@config/routes';

import { locales }       from '../config/locales';
import * as S            from './styles';
import { CodePath }      from './CodePath';

import type { VFC }      from 'react';

const Body: VFC = () => (
	<S.Container>
		<S.Text>
			<T.Text html id={ locales.title } path={ <CodePath /> } />
		</S.Text>

		<S.Link to={ routes.second.path }>
			<T.Text id={ locales.link } />
		</S.Link>
	</S.Container>
);

export { Body };
