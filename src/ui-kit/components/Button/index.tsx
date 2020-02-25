import React             from 'react';

import { Sizes, Styles } from '@ui-kit/enums/button';
import * as S            from './styled';
import { Props }         from './types';

/**
 * basic UI element of Donut Boilerplate
 * @visibleName Button
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const Button: React.FC<Props> = (props): JSX.Element => {
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
    size : Sizes.Medium,
    style: Styles.Primary
};

export default Button;
