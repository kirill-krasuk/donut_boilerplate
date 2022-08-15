import styled              from 'styled-components/macro';

import { THEME_ICON_SIZE } from '../../../config/constants';

import type { AppTheme }   from '@entities/theme';

const ThemeButton = styled.button`
	margin-left: 20px;
	background: transparent;
	border: none;
	outline: none;

	& svg {
		width: ${ THEME_ICON_SIZE };
		height: ${ THEME_ICON_SIZE };
		color: var(--icon);
		filter: brightness(1);

		&:hover {
			cursor: pointer;
			filter: ${ ({ theme }: AppTheme) =>
				(!theme.isDark
					? 'brightness(0.85)'
					: 'brightness(1.14)') };
		}
	}
`;

export { ThemeButton };
