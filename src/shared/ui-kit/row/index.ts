import styled, { css }   from 'styled-components';

import { getSpacing }    from '@lib/styles';

import type { RowProps } from './types';

const Row = styled.div<RowProps>`
	${ ({ padding, margin }) => css`
		display: flex;
		margin: ${ getSpacing(margin) };
		padding: ${ getSpacing(padding) };
	` }
`;

export { Row };
