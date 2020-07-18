import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EOLocale as T }            from 'eo-locale';
import { Sun }                      from '@styled-icons/fa-solid/Sun';
import { Moon }                     from '@styled-icons/fa-solid/Moon';
import R                            from 'ramda';

import { changeThemeAction }        from '@core/actions/theme';
import { getMode }                  from '@core/selectors/theme';
import { getLocale }                from '@core/selectors/locale';
import { changeLocaleAction }       from '@core/actions/locale/index';
import { Theme }                    from '@core/enums/theme';
import { Locale }                   from '@core/enums/locale';
import * as S                       from './styled';
import messages                     from './messages';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const mode   = useSelector(getMode);
    const locale = useSelector(getLocale);

    const composeWithDispatch: any = R.partial(R.compose, [ dispatch ]);

    const changeTheme: typeof changeThemeAction   = composeWithDispatch(changeThemeAction);
    const changeLocale: typeof changeLocaleAction = composeWithDispatch(changeLocaleAction);

    const ThemeIcon = {
        [Theme.Light]: Sun,
        [Theme.Dark] : Moon
    }[mode];

    const ThemeLogo = {
        [Theme.Dark] : S.Logo,
        [Theme.Light]: S.DarkLogo
    }[mode];

    const reverseLocale = {
        [Locale.Ru]: Locale.En,
        [Locale.En]: Locale.Ru
    };

    const reverseThemeMode = {
        [Theme.Dark] : Theme.Light,
        [Theme.Light]: Theme.Dark,
    };

    const handleChangeTheme = () => {
        changeTheme(reverseThemeMode[mode]);
    };

    const handleChangeLocale = () => {
        changeLocale(reverseLocale[locale]);
    };

    return (
        <S.Header>
            <S.Nav>
                <S.ThemeIcon>
                    <ThemeIcon onClick={ handleChangeTheme } />
                </S.ThemeIcon>
                <S.LocaleToggler onClick={ handleChangeLocale }>
                    { reverseLocale[locale] }
                </S.LocaleToggler>
            </S.Nav>
            <S.Content>
                <ThemeLogo />
                <S.Title>
                    <T.Text id={ messages.title } />
                </S.Title>
            </S.Content>
        </S.Header>
    );
};

export default Header;
