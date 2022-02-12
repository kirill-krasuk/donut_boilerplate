/* eslint-disable no-param-reassign */
import { FC }              from 'react';
import { Outlet }          from 'react-router-dom';
import { ThemeProvider }   from 'styled-components/macro';

import { theme as themes } from '@core/config/theme';
import { GlobalStyles }    from '@app/components';
import LanguageProvider    from '@core/components/LanguageProvider';
import { Theme }           from '@core/enums/theme';
import { useTheme }        from './hooks';

// import ModalManager                           from '@core/components/ModalManager';
import * as S              from './styles';

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
