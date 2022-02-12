import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useActions }  from '@hooks/index';
import { getMode }     from '@core/store/selectors/theme';
import { toggleTheme } from './helpers';

export function useThemeMode() {
    const { changeThemeAction } = useActions();

    const mode = useSelector(getMode);

    const handleChangeTheme = useCallback(() => {
        changeThemeAction(toggleTheme(mode));
    }, [ changeThemeAction, mode ]);

    return {
        mode,
        handleChangeTheme,
    };
}
