import { FC }                 from 'react';
import { useSelector }        from 'react-redux';
import { EOLocale as T }      from 'eo-locale';
import { Sun }                from '@styled-icons/fa-solid/Sun';
import { Moon }               from '@styled-icons/fa-solid/Moon';

import { getMode }            from '@core/store/selectors/theme';
import { getLocale }          from '@core/store/selectors/locale';
import { Theme }              from '@core/enums/theme';
import { Locale }             from '@core/enums/locale';
import { createToggleHelper } from '@core/utils/toggler';
import { createFactory }      from '@core/utils/factory';
import { useActions }         from '@core/hooks/useActions';
import * as S                 from './styled';
import messages               from './messages';

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
    const { changeThemeAction, changeLocaleAction } = useActions();

    const mode   = useSelector(getMode);
    const locale = useSelector(getLocale);

    const handleChangeTheme = () => {
        changeThemeAction(toggleThemeMode(mode));
    };

    const handleChangeLocale = () => {
        changeLocaleAction(toggleLocale(locale));
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
