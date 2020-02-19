import React                        from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage as T }    from 'react-intl';
import { Sun }                      from 'styled-icons/fa-solid/Sun';
import { Moon }                     from 'styled-icons/fa-solid/Moon';

import { changeThemeAction }        from '@core/actions/theme';
import { getMode }                  from '@core/selectors/theme';
import { getLocale }                from '@core/selectors/locale';
import { changeLocaleAction }       from '@core/actions/locale/index';
import * as S                       from './styled';
import messages                     from './messages';

const Header = (): JSX.Element => {
    const dispatch = useDispatch();

    const mode   = useSelector<string, string>(getMode);
    const locale = useSelector(getLocale);

    const ThemeIcon = {
        light: Sun,
        dark : Moon
    }[mode];

    const ThemeLogo = {
        dark : S.Logo,
        light: S.DarkLogo
    }[mode];

    const nextLocale = locale === 'en'
        ? 'ru'
        : 'en';

    const handleChangeTheme = (): void => {
        const reverseMode = mode === 'light'
            ? 'dark'
            : 'light';

        dispatch(changeThemeAction(reverseMode));
    };

    const handleChangeLocale = (): void => {
        dispatch(changeLocaleAction(nextLocale));
    };

    return (
        <S.Header>
            <S.Nav>
                <S.ThemeIcon>
                    <ThemeIcon onClick={ handleChangeTheme } />
                </S.ThemeIcon>
                <S.LocaleToggler onClick={ handleChangeLocale }>
                    { nextLocale }
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
