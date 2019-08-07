// @flow
import React                           from 'react';
import type { ComponentType, Node }    from 'react';
import { useSelector }                 from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en                              from 'react-intl/locale-data/en';
import ru                              from 'react-intl/locale-data/ru';

import messages                        from 'core/locales';
import { getLocale }                   from 'core/selectors/locale';
import type { PropsType }              from './types';

addLocaleData([ ...en, ...ru ]);

const LanguageProvider: ComponentType<PropsType> = (props): Node => {
    const { children } = props;

    const locale = useSelector(getLocale);

    return (
        <IntlProvider
            key={ locale }
            locale={ locale }
            messages={ messages[locale] }
        >
            { children }
        </IntlProvider>
    );
};

export default LanguageProvider;
