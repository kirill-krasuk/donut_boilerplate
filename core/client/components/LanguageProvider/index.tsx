import { FC }          from 'react';
import { useSelector } from 'react-redux';
import { EOLocale }    from 'eo-locale';

import locales         from '@app/config/locales';
import { localeModel } from '@entities/locale';
import { Props }       from './types';

const LanguageProvider: FC<Props> = (props) => {
    const { children } = props;

    const locale = useSelector(localeModel.selectors.getLocale);

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
