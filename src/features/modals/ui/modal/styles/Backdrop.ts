import styled from 'styled-components';

const Backdrop = styled.div`
	position: absolute;
	z-index: 999;
	top: 0;
	left: 0;

	display: flex;
	align-items: flex-start;
	justify-content: center;

	width: 100%;
	height: calc(100% - 300px);
	padding-top: 300px;

	color: white;

	backdrop-filter: blur(5px);

	&::before {
		content: '';

		position: absolute;
		z-index: 1000;
		top: 0;

		width: 100%;
		height: 100%;

		background-color: black;
		filter: opacity(0.3);
	}

	& > div {
		z-index: 1001;
	}
`;

export { Backdrop };
