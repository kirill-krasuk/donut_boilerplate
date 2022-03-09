import { ReactNode, MouseEvent }     from 'react';

import { ButtonSizes, ButtonStyles } from '@ui-kit/enums/button';

export type Props = {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,

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
