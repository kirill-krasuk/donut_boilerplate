import { ReactNode, MouseEvent }     from 'react';

import { ButtonSizes, ButtonStyles } from '@ui-kit/enums/button';

export type Props = {

    /**
     * onClick handler
    */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

    /**
     * Small 24
     * Medium 32
     * Large 48
    */
    size: ButtonSizes;

    /**
     * Primary - "primary"
     * Secondary - "secondary"
    */
    style: ButtonStyles;

    children: ReactNode;
}
