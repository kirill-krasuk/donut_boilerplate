import { useSelector }                from 'react-redux';
import { EOLocale }                   from 'eo-locale';

import locales                        from '@config/locales';
import { localeModel }                from '@entities/locale';

import type { FC, PropsWithChildren } from 'react';

export const LocalesProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
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
