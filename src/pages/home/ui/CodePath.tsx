import { EOLocale as T } from 'eo-locale';

import { locales }       from '../config/locales';

export const CodePath = () => (
    <code>
        <T.Text id={ locales.path } />
    </code>
);
