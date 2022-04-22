import styled from 'styled-components/macro';

export const Header = styled.header`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	background: var(--header-background);

	&:before {
		position: absolute;
		bottom: 0;
		z-index: 10;
		width: 60%;
		height: 2px;
		background: var(--secondary);
		content: '';
	}
`;
