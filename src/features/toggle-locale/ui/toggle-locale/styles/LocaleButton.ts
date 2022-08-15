import styled            from 'styled-components/macro';

import type { AppTheme } from '@entities/theme';

const LocaleButton = styled.button`
	margin-right: 20px;
	color: var(--icon);
	font-size: 2rem;
	text-transform: uppercase;
	background: transparent;
	border: none;
	outline: none;
	filter: brightness(1);

	&:hover {
		cursor: pointer;
		filter: ${ ({ theme }: AppTheme) =>
			(!theme.isDark
				? 'brightness(0.85)'
				: 'brightness(1.14)') };
	}
`;

export { LocaleButton };
