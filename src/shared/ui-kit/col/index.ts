import styled, { css }   from 'styled-components';

import { getSpacing }    from '@lib/styles';

import type { ColProps } from './type';

const Col = styled.div<ColProps>`
	${ ({ padding, margin }) => css`
		display: flex;
		flex-direction: column;
		margin: ${ getSpacing(margin) };
		padding: ${ getSpacing(padding) };
	` }
`;

export { Col };
