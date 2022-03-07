import { useCallback }              from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { localeModel }              from '@entities/locale';
import { toggleLocale }             from './helpers';

export function useLocale() {
    const dispatch = useDispatch();

    const locale = useSelector(localeModel.selectors.getLocale);

    const handleChangeLocale = useCallback(() => {
        dispatch(localeModel.actions.changeLocale(toggleLocale(locale)));
    }, [ dispatch, locale ]);

    return {
        locale,
        handleChangeLocale,
    };
}
