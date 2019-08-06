// @flow
import React                        from 'react';
import type { Node }                from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sun }                      from 'styled-icons/fa-solid/Sun';
import { Moon }                     from 'styled-icons/fa-solid/Moon';

import { changeThemeAction }        from 'core/actions/theme';
import { getMode }                  from 'core/selectors/theme';
import * as Styled                  from './styled';

/**
 * @visibleName Header
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const Header = (): Node => {
    const dispatch = useDispatch();

    /**
     * theme mode variable
     * @enum {string}
    */

    const mode = useSelector(getMode);

    const ThemeIcon = {
        light: Sun,
        dark : Moon
    }[mode];

    const ThemeLogo = {
        dark: Styled.Logo,
        light : Styled.DarkLogo
    }[mode];

    const handleChangeTheme = () => {
        const reverseMode = mode === 'light'
            ? 'dark'
            : 'light';

        dispatch(changeThemeAction(reverseMode));
    };

    return (
        <Styled.Header>
            <Styled.Nav>
                <Styled.ThemeIcon>
                    <ThemeIcon onClick={ handleChangeTheme } />
                </Styled.ThemeIcon>
            </Styled.Nav>
            <Styled.Content>
                <ThemeLogo />
                <Styled.Title>Welcome to Donut Boilerplate v2</Styled.Title>
            </Styled.Content>
        </Styled.Header>
    );
};

export default Header;
