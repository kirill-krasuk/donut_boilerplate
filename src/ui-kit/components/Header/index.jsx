// @flow

import React                        from 'react';
import type { Node }                from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage as T }    from 'react-intl';
import { Sun }                      from 'styled-icons/fa-solid/Sun';
import { Moon }                     from 'styled-icons/fa-solid/Moon';

import { changeThemeAction }        from 'core/actions/theme';
import { getMode }                  from 'core/selectors/theme';
import { getLocale }                from 'core/selectors/locale';
import { changeLocaleAction }       from 'core/actions/locale/index';
import * as Styled                  from './styled';
import messages                     from './messages';

/**
 * @visibleName Header
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const Header = (): Node => {
    const dispatch = useDispatch();

    const mode   = useSelector(getMode);
    const locale = useSelector(getLocale);

    const ThemeIcon = {
        light: Sun,
        dark : Moon
    }[mode];

    const ThemeLogo = {
        dark : Styled.Logo,
        light: Styled.DarkLogo
    }[mode];

    const nextLocale = locale === 'en'
        ? 'ru'
        : 'en';

    const handleChangeTheme = () => {
        const reverseMode = mode === 'light'
            ? 'dark'
            : 'light';

        dispatch(changeThemeAction(reverseMode));
    };

    const handleChangeLocale = () => {
        dispatch(changeLocaleAction(nextLocale));
    };

    return (
        <Styled.Header>
            <Styled.Nav>
                <Styled.ThemeIcon>
                    <ThemeIcon onClick={ handleChangeTheme } />
                </Styled.ThemeIcon>
                <Styled.LocaleToggler onClick={ handleChangeLocale }>
                    { nextLocale }
                </Styled.LocaleToggler>
            </Styled.Nav>
            <Styled.Content>
                <ThemeLogo />
                <Styled.Title>
                    <T { ...messages.title } />
                </Styled.Title>
            </Styled.Content>
        </Styled.Header>
    );
};

export default Header;
