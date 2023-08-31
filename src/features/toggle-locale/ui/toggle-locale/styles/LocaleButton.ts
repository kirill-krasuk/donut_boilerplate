import styled            from 'styled-components';

import type { AppTheme } from '@entities/theme';

const LocaleButton = styled.button`
	margin-right: 20px;

	font-size: 2rem;
	color: var(--icon);
	text-transform: uppercase;

	background: transparent;
	filter: brightness(1);
	border: none;
	outline: none;

	&:hover {
		cursor: pointer;
		filter: ${ ({ theme }: AppTheme) =>
			(!theme.isDark
				? 'brightness(0.85)'
				: 'brightness(1.14)') };
	}
`;

export { LocaleButton };
