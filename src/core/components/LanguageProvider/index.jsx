// @flow

import React                           from 'react';
import type { ComponentType, Node }    from 'react';
import { useSelector }                 from 'react-redux';
import { IntlProvider }                from 'react-intl';

import messages                        from 'core/locales';
import { getLocale }                   from 'core/selectors/locale';
import type { PropsType }              from './types';

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
