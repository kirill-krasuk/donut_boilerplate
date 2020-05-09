import styled, { css }       from 'styled-components/macro';
import { Link as ReactLink } from 'react-router-dom';

import { Theme }             from '@core/types/theme';

export const Link = styled(ReactLink)`
    ${ ({ theme }: Theme) => css`
        color: ${ theme[theme.mode].secondary };
    ` };
`;
