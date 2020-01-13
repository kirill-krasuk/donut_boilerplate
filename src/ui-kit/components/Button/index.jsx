// @flow

import React         from 'react';
import type { Node } from 'react';

import * as Styled   from './styled';

type PropsType = {

    /** custom onClick handler */

    onClick?: Function,

    /** possible button sizes */

    size: 'sm' | 'med' | 'lg',

    /** possible button colors themes */

    type: 'secondary' | 'primary',

    children: Node,
}

/**
 * basic UI elemnet of Donut Boilerplate
 * @visibleName Button
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const Button = (props: PropsType): Node => {
    const {
        onClick,
        size,
        children,
        type
    } = props;

    return (
        <Styled.Wrapper
            size={ size }
            onClick={ onClick }
            type={ type }
        >
            { children }
        </Styled.Wrapper>
    );
};

Button.defaultProps = {
    size: 'md',
    type: 'primary'
};

export default Button;
