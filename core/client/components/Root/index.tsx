/* eslint-disable no-param-reassign */
import { FC }                     from 'react';
import { Outlet }                 from 'react-router-dom';
import { ThemeProvider }          from 'styled-components/macro';

import { theme as themes, Theme } from '@config/theme';
import { GlobalStyles }           from '@app/components';
import LanguageProvider           from '@client/components/LanguageProvider';
import { useTheme }               from './hooks';
import * as S                     from './styles';

// import ModalManager    from '@client/components/ModalManager';

const Root: FC = () => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={ {
            ...themes,
            mode  : theme,
            isDark: theme === Theme.Dark
        } }
        >
            <S.Wrapper>
                <GlobalStyles />

                <LanguageProvider>
                    <>
                        <Outlet />

                        { /* <ModalManager /> */ }
                    </>
                </LanguageProvider>
            </S.Wrapper>
        </ThemeProvider>
    );
};

export default Root;
