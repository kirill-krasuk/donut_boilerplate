import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useActions }  from '@hooks/index';

import { toggleTheme } from '../../lib/toggleTheme';
import * as actions    from '../store/actions';
import { getMode }     from '../store/selectors';

function useThemeMode() {
	const { changeTheme } = useActions(actions);

	const mode = useSelector(getMode);

	const handleChangeTheme = useCallback(() => {
		changeTheme(toggleTheme(mode));
	}, [ changeTheme, mode ]);

	return { mode, handleChangeTheme };
}

export { useThemeMode };
