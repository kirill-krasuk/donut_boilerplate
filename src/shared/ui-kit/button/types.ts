import type { ReactNode, MouseEventHandler, PropsWithChildren } from 'react';
import type { ButtonSizes, ButtonStyles }                       from './enums';

export type Props = PropsWithChildren<{
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
}>;
