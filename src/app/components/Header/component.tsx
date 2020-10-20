import { FC }                       from 'react';
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
import { createToggleHelper }       from '@core/utils/toggler';
import { createFactory }            from '@core/utils/factory';
import * as S                       from './styled';
import messages                     from './messages';

const toggleLocale = createToggleHelper({
    [Locale.Ru]: Locale.En,
    [Locale.En]: Locale.Ru
});

const toggleThemeMode = createToggleHelper({
    [Theme.Dark] : Theme.Light,
    [Theme.Light]: Theme.Dark,
});

const themeIconFactory = createFactory({
    [Theme.Light]: Sun,
    [Theme.Dark] : Moon
});

const themeLogoFactory = createFactory({
    [Theme.Dark] : S.Logo,
    [Theme.Light]: S.DarkLogo
});

const Header: FC = () => {
    const dispatch = useDispatch();

    const mode   = useSelector(getMode);
    const locale = useSelector(getLocale);

    const composeWithDispatch: any = R.partial(R.compose, [ dispatch ]);

    const changeTheme: typeof changeThemeAction   = composeWithDispatch(changeThemeAction);
    const changeLocale: typeof changeLocaleAction = composeWithDispatch(changeLocaleAction);

    const handleChangeTheme = () => {
        changeTheme(toggleThemeMode(mode));
    };

    const handleChangeLocale = () => {
        changeLocale(toggleLocale(locale));
    };

    return (
        <S.Header>
            <S.Nav>
                <S.ThemeIcon>
                    { themeIconFactory(mode, { onClick: handleChangeTheme }) }
                </S.ThemeIcon>
                <S.LocaleToggler onClick={ handleChangeLocale }>
                    { locale }
                </S.LocaleToggler>
            </S.Nav>
            <S.Content>
                { themeLogoFactory(mode) }
                <S.Title>
                    <T.Text id={ messages.title } />
                </S.Title>
            </S.Content>
        </S.Header>
    );
};

export default Header;
