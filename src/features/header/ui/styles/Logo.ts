import styled                        from 'styled-components/macro';

import { ReactComponent as LogoSVG } from '@svgs/new_logo.svg';

import { LOGO_SIZE }                 from '../../config/constants';

const Logo = styled(LogoSVG)`
	width: ${ LOGO_SIZE };
	height: ${ LOGO_SIZE };
	margin: 20px 0;
`;

export { Logo };
