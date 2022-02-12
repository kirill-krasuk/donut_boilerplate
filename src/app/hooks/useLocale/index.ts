import { useCallback }  from 'react';
import { useSelector }  from 'react-redux';

import { useActions }   from '@hooks/useActions';
import { getLocale }    from '@core/store/selectors/locale';
import { toggleLocale } from './helpers';

export function useLocale() {
    const { changeLocaleAction } = useActions();

    const locale = useSelector(getLocale);

    const handleChangeLocale = useCallback(() => {
        changeLocaleAction(toggleLocale(locale));
    }, [ changeLocaleAction, locale ]);

    return {
        locale,
        handleChangeLocale,
    };
}
