// @flow
import React         from 'react';
import type { Node } from 'react';
import { Sun }       from 'styled-icons/fa-solid/Sun';
import { Moon }      from 'styled-icons/fa-solid/Moon';

import * as Styled   from './styled';

/**
 * @visibleName CurvedHeader
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const CurvedHeader = (): Node => {
    const ThemeIcon = {
        light: Sun,
        dark : Moon
    }.light;

    return (
        <Styled.Header>
            <Styled.Nav>
                <Styled.ThemeIcon>
                    <ThemeIcon />
                </Styled.ThemeIcon>
            </Styled.Nav>
            <Styled.Content>
                <Styled.Logo />
                <Styled.Title>Donut Boilerplate v2</Styled.Title>
            </Styled.Content>
        </Styled.Header>
    );
};

export default CurvedHeader;
