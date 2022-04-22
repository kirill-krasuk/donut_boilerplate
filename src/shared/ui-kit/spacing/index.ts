import styled, { css } from 'styled-components/macro';

import { getSpacing }  from '@lib/styles';

import type { Props }  from './types';

export const Spacing = styled.div<Props>`
	${ ({ padding, margin }) => css`
		padding: ${ getSpacing(padding) };
		margin: ${ getSpacing(margin) };
	` }
`;
