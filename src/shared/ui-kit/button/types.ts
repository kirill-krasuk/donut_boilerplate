import { ReactNode, MouseEventHandler } from 'react';

import { ButtonSizes, ButtonStyles }    from './enums';

export type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>,

    /**
     * Small 24px
     * Medium 32px
     * Large 48px
    */
    size?: ButtonSizes,

    /**
     * "primary"
     * "secondary"
    */
    style?: ButtonStyles,

    children: ReactNode
}
