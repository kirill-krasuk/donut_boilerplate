import { useState, useEffect }                     from 'react';
import { useSelector }                             from 'react-redux';
import Cookie                                      from 'js-cookie';
import { Theme, themeModel }                       from '@entities/theme';
import { setDataThemeAttribute, getDarkModeQuery } from '@lib/dom';
import { useActions }                              from '@hooks/index';

export function useTheme() {
    const { changePreferColorScheme } = useActions(themeModel.actions);
    const mode                        = useSelector(themeModel.selectors.getMode);
    const [ theme, setTheme ]         = useState(mode);

    const handleChangeTheme = (event: MediaQueryListEvent) => {
        setTheme(event.matches ? Theme.Dark : Theme.Light);
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
