import styled, { css }       from 'styled-components';

import { getSpacing }        from '@lib/styles';

import type { SpacingProps } from './types';

const Spacing = styled.div<SpacingProps>`
	${ ({ padding, margin }) => css`
		margin: ${ getSpacing(margin) };
		padding: ${ getSpacing(padding) };
	` }
`;

export { Spacing };
