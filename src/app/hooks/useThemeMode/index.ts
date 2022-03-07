import { useCallback }              from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { themeModel }               from '@entities/theme';
import { toggleTheme }              from './helpers';

export function useThemeMode() {
    const dispatch = useDispatch();

    const mode = useSelector(themeModel.selectors.getMode);

    const handleChangeTheme = useCallback(() => {
        dispatch(themeModel.actions.changeTheme(toggleTheme(mode)));
    }, [ dispatch, mode ]);

    return {
        mode,
        handleChangeTheme,
    };
}
