import { FC }                        from 'react';

import { ButtonSizes, ButtonStyles } from '@ui-kit/enums/button';
import * as S                        from './styles';
import { Props }                     from './types';

/**
* This is Button component for donut boilerplate
*/
export const Button: FC<Props> = (props) => {
    const {
        onClick,
        children,
        size = ButtonSizes.Medium,
        style = ButtonStyles.Primary,
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

export default Button;
