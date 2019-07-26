// @flow
import React         from 'react';
import type { Node } from 'react';

import * as Styled   from './styled';

/**
 * @visibleName CurvedHeader
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const CurvedHeader = (): Node => (
    <Styled.Header>
        <Styled.Content>
            <Styled.Logo />
            <Styled.Title>Donut Boilerplate v2</Styled.Title>
        </Styled.Content>
    </Styled.Header>
);

export default CurvedHeader;
