import React            from 'react';
import { useSelector }  from 'react-redux';
import { IntlProvider } from 'react-intl';

import messages         from '@core/locales';
import { getLocale }    from '@core/selectors/locale';
import { Props }        from './types';

const LanguageProvider: React.FC<Props> = (props): JSX.Element => {
    const { children } = props;

    const locale = useSelector(getLocale);

    return (
        <IntlProvider
            locale={ locale }
            messages={ messages[locale] }
        >
            { children }
        </IntlProvider>
    );
};

export default LanguageProvider;
