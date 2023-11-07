import { useSelector } from 'react-redux';
import { EOLocale }    from 'eo-locale';

import locales         from '@config/locales';
import { localeModel } from '@entities/locale';

import type { FC }     from 'react';

const LocalesProvider: FC = ({ children }) => {
	const lang = useSelector(localeModel.selectors.getLocale);

	// TODO: https://dev.to/deeppatel234/debug-reactjs-context-api-with-react-context-devtool-3plb
	return (
		<EOLocale.Provider language={ lang } locales={ locales }>
			{ children }
		</EOLocale.Provider>
	);
};

export { LocalesProvider };
