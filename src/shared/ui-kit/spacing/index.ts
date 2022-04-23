import styled, { css }       from 'styled-components/macro';

import { getSpacing }        from '@lib/styles';

import type { SpacingProps } from './types';

const Spacing = styled.div<SpacingProps>`
	${ ({ padding, margin }) => css`
		padding: ${ getSpacing(padding) };
		margin: ${ getSpacing(margin) };
	` }
`;

export { Spacing };
