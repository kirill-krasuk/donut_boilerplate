import styled, { css }   from 'styled-components/macro';

import { getSpacing }    from '@lib/styles';

import type { ColProps } from './type';

const Col = styled.div<ColProps>`
	${ ({ padding, margin }) => css`
		display: flex;
		flex-direction: column;
		padding: ${ getSpacing(padding) };
		margin: ${ getSpacing(margin) };
	` }
`;

export { Col };
