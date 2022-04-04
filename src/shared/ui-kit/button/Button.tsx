import { FC }                        from 'react';

import { ButtonSizes, ButtonStyles } from './enums';
import { Props }                     from './types';
import * as S                        from './styles';

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
            cStyle={ style }
            size={ size }
            onClick={ onClick }
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
