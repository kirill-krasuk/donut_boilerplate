import React               from 'react';

import { ESizes, EStyles } from '@ui-kit/enums/button';
import * as S              from './styled';
import { Props }           from './types';

/**
 * basic UI element of Donut Boilerplate
 * @visibleName Button
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const Button: React.FC<Props> = (props) => {
    const {
        onClick,
        size,
        children,
        style,
    } = props;

    return (
        <S.Wrapper
            size={ size }
            onClick={ onClick }
            cStyle={ style }
        >
            { children }
        </S.Wrapper>
    );
};

Button.defaultProps = {
    size : ESizes.Medium,
    style: EStyles.Primary
};

export default Button;
