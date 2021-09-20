import { FC }                      from 'react';
import { EOLocale as T }           from 'eo-locale';
import { Sun }                     from '@styled-icons/fa-solid/Sun';
import { Moon }                    from '@styled-icons/fa-solid/Moon';

import { Theme }                   from '@core/enums/theme';
import { createFactory }           from '@utils/factory';
import { useLocale, useThemeMode } from '@app/hooks';
import * as S                      from './styled';
import messages                    from './messages';

const themeIconFactory = createFactory({
    [Theme.Light]: Sun,
    [Theme.Dark] : Moon
});

const themeLogoFactory = createFactory({
    [Theme.Dark] : S.Logo,
    [Theme.Light]: S.DarkLogo
});

const Header: FC = () => {
    const { locale, handleChangeLocale } = useLocale();
    const { mode, handleChangeTheme }    = useThemeMode();

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
