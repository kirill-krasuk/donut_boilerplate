import { useState, useEffect }                     from 'react';
import { useSelector }                             from 'react-redux';
import Cookie                                      from 'js-cookie';

import { setDataThemeAttribute, getDarkModeQuery } from '@lib/dom';
import { useActions }                              from '@hooks/index';
import { Theme }                                   from '@shared/config/theme/types/enums';

import * as actions                                from '../store/actions';
import { getMode }                                 from '../store/selectors';

function useTheme() {
	const { changePreferColorScheme } = useActions(actions);
	const mode                        = useSelector(getMode);
	const [ theme, setTheme ]         = useState(mode);

	const handleChangeTheme = (event: MediaQueryListEvent) => {
		setTheme(event.matches
			? Theme.Dark
			: Theme.Light);
	};

	useEffect(() => {
		setDataThemeAttribute(theme);
	}, [ theme ]);

	/**
	 * change theme by os theme
	 * if the theme is not set force
	 */
	useEffect(() => {
		if (!Cookie.get('theme')) {
			const currentTheme = getDarkModeQuery()?.matches
				? Theme.Dark
				: Theme.Light;

			changePreferColorScheme(currentTheme);
			setTheme(currentTheme);
		}
	}, [ changePreferColorScheme, theme ]);

	// prefer-color-scheme listener
	useEffect(() => {
		if (!Cookie.get('theme')) {
			const darkModeQuery = getDarkModeQuery();

			darkModeQuery?.addEventListener('change', handleChangeTheme);

			return () => {
				darkModeQuery?.removeEventListener('change', handleChangeTheme);
			};
		}
	});

	return theme;
}

export { useTheme };
