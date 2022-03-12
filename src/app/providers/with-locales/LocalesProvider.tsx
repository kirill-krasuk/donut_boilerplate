import { FC }          from 'react';
import { useSelector } from 'react-redux';
import { EOLocale }    from 'eo-locale';

import locales         from '@config/locales';
import { localeModel } from '@entities/locale';

export const LocalesProvider: FC = ({ children }) => {
    const lang = useSelector(localeModel.selectors.getLocale);

    return (
        <EOLocale.Provider
            language={ lang }
            locales={ locales }
        >
            { children }
        </EOLocale.Provider>
    );
};
