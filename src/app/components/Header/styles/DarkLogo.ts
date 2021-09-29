import styled                     from 'styled-components/macro';

import { ReactComponent as Logo } from '@svgs/new_dark_logo.svg';
import { LOGO_SIZE }              from '@ui-kit/constants/header';

export const DarkLogo = styled(Logo)`
    width: ${ LOGO_SIZE };
    height: ${ LOGO_SIZE };
    margin: 20px 0;
`;