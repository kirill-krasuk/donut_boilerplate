import React           from 'react';
import { useSelector } from 'react-redux';
import { EOLocale }    from 'eo-locale';

import locales         from '@core/locales';
import { getLocale }   from '@core/selectors/locale';
import { Props }       from './types';

const LanguageProvider: React.FC<Props> = (props) => {
    const { children } = props;

    const locale = useSelector(getLocale);

    return (
        <EOLocale.Provider
            language={ locale }
            locales={ locales }
        >
            { children }
        </EOLocale.Provider>
    );
};

export default LanguageProvider;
