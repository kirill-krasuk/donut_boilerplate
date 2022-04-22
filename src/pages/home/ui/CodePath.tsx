import { EOLocale as T } from 'eo-locale';

import { locales }       from '../config/locales';

import type { FC }       from 'react';

export const CodePath: FC = () => (
	<code>
		<T.Text id={ locales.path } />
	</code>
);
