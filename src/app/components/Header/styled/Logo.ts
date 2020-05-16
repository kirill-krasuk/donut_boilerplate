import styled        from 'styled-components/macro';

import LogoSVG       from '@svgs/new_logo.svg';
import { LOGO_SIZE } from '@ui-kit/constants/header';

export const Logo = styled(LogoSVG)`
    height: ${ LOGO_SIZE };
    width: ${ LOGO_SIZE };
    margin: 20px 0;
`;
