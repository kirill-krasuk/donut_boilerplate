import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { themeModel }  from '@entities/theme';
import { useActions }  from '@hooks/index';
import { toggleTheme } from './helpers';

export function useThemeMode() {
    const { changeTheme } = useActions(themeModel.actions);

    const mode = useSelector(themeModel.selectors.getMode);

    const handleChangeTheme = useCallback(() => {
        changeTheme(toggleTheme(mode));
    }, [ changeTheme, mode ]);

    return {
        mode,
        handleChangeTheme,
    };
}
