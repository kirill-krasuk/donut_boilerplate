import { useSelector } from 'react-redux';
import { EOLocale }    from 'eo-locale';

import locales         from '@config/locales';
import { localeModel } from '@entities/locale';

import type { FC }     from 'react';

const LocalesProvider: FC = ({ children }) => {
	const lang = useSelector(localeModel.selectors.getLocale);

	return (
		<EOLocale.Provider language={ lang } locales={ locales }>
			{ children }
		</EOLocale.Provider>
	);
};

export { LocalesProvider };
