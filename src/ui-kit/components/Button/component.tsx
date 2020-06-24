import React, { FC }                 from 'react';
import { hot }                       from 'react-hot-loader/root';

import { ButtonSizes, ButtonStyles } from '@ui-kit/enums/button';
import * as S                        from './styled';
import { Props }                     from './types';

/**
* This is Button component for donut boilerplate
*/
export const Button: FC<Props> = (props) => {
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
    size : ButtonSizes.Medium,
    style: ButtonStyles.Primary
};

export default hot(Button);
