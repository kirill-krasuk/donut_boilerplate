import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage as T }    from 'react-intl';
import { Sun }                      from 'styled-icons/fa-solid/Sun';
import { Moon }                     from 'styled-icons/fa-solid/Moon';
import R                            from 'ramda';

import { changeThemeAction }        from '@core/actions/theme';
import { getMode }                  from '@core/selectors/theme';
import { getLocale }                from '@core/selectors/locale';
import { changeLocaleAction }       from '@core/actions/locale/index';
import { ETheme }                   from '@core/enums/theme';
import { ELocale }                  from '@core/enums/locale';
import * as S                       from './styled';
import messages                     from './messages';

const Header = (): JSX.Element => {
    const dispatch = useDispatch();

    const mode   = useSelector(getMode);
    const locale = useSelector(getLocale);

    const composeWithDispatch: Function = R.partial(R.compose, [ dispatch ]);

    const changeTheme: typeof changeThemeAction   = composeWithDispatch(changeThemeAction);
    const changeLocale: typeof changeLocaleAction = composeWithDispatch(changeLocaleAction);

    const ThemeIcon = {
        [ETheme.Light]: Sun,
        [ETheme.Dark] : Moon
    }[mode];

    const ThemeLogo = {
        [ETheme.Dark] : S.Logo,
        [ETheme.Light]: S.DarkLogo
    }[mode];

    const reverseLocale = {
        [ELocale.Ru]: ELocale.En,
        [ELocale.En]: ELocale.Ru
    };

    const reverseThemeMode = {
        [ETheme.Dark] : ETheme.Light,
        [ETheme.Light]: ETheme.Dark,
    };

    const handleChangeTheme = (): void => {
        changeTheme(reverseThemeMode[mode]);
    };

    const handleChangeLocale = (): void => {
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
                    <T { ...messages.title } />
                </S.Title>
            </S.Content>
        </S.Header>
    );
};

export default Header;
