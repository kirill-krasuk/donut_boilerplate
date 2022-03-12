import { ComponentType } from 'react';

import { useSelector }   from 'react-redux';
import { EOLocale }      from 'eo-locale';

import locales           from '@shared/config/locales';
import { localeModel }   from '@entities/locale';

export function withLocales<T>(Component: ComponentType<T>) {
    function LocalesProvider(props: T) {
        const lang = useSelector(localeModel.selectors.getLocale);

        return (
            <EOLocale.Provider
                language={ lang }
                locales={ locales }
            >
                <Component { ...props } />
            </EOLocale.Provider>
        );
    }

    LocalesProvider.displayName = `withLocales(${ Component.displayName })`;

    return LocalesProvider;
}
