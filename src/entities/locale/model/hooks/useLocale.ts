import { useCallback }  from 'react';
import { useSelector }  from 'react-redux';

import { localeModel }  from '@entities/locale';
import { useActions }   from '@hooks/index';
import { toggleLocale } from '../../lib/toggleLocale';

export function useLocale() {
    const { changeLocale } = useActions(localeModel.actions);

    const locale = useSelector(localeModel.selectors.getLocale);

    const handleChangeLocale = useCallback(() => {
        changeLocale(toggleLocale(locale));
    }, [ changeLocale, locale ]);

    return {
        locale,
        handleChangeLocale,
    };
}
