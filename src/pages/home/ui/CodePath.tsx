import { EOLocale as T } from 'eo-locale';

import { locales }       from '../config/locales';

import type { FC }       from 'react';

const CodePath: FC = () => (
	<code>
		<T.Text id={ locales.path } />
	</code>
);

export { CodePath };
