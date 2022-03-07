import { css }      from 'styled-components/macro';

import { AppTheme } from '../types';
import { palette }  from './palette';

export const theme = {
    colors: palette,
} as const;

export const commonValues = ({ theme }: AppTheme) => css`
    --dark-blue-0: ${ theme.colors.darkBlue[0] };
    --gray-0: ${ theme.colors.gray[0] };
    --pink-0: ${ theme.colors.pink[0] };
    --pink-1: ${ theme.colors.pink[1] };
    --white-0: ${ theme.colors.white[0] };
`;

export const darkValues = ({ theme }: AppTheme) => css`
    --primary: ${ theme.colors.darkBlue[0] };
    --secondary: ${ theme.colors.pink[0] };

    --background: ${ theme.colors.darkBlue[0] };
    --header-background: ${ theme.colors.darkBlue[0] };

    --text: ${ theme.colors.white[0] }; 
    --icon: ${ theme.colors.pink[0] };
`;

export const lightValues = ({ theme }: AppTheme) => css`
    --primary: ${ theme.colors.pink[0] };
    --secondary: ${ theme.colors.darkBlue[0] };

    --background: ${ theme.colors.white[0] };
    --header-background: ${ theme.colors.pink[1] };

    --text: ${ theme.colors.darkBlue[0] }; 
    --icon: ${ theme.colors.white[0] };
`;
