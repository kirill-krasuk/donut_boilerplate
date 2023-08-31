import styled from 'styled-components';

const Header = styled.header`
	position: relative;

	display: flex;
	justify-content: center;

	width: 100%;

	background: var(--header-background);

	&::before {
		content: '';

		position: absolute;
		z-index: 10;
		bottom: 0;

		width: 60%;
		height: 2px;

		background: var(--secondary);
	}
`;

export { Header };
