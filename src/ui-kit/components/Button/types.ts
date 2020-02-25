import { ESizes, EStyles } from '@ui-kit/enums/button';

export type Props = {

    /**
     * onClick handler - not required
    */
    onClick?: Function;

    /**
     * Small 24
     * Medium 32
     * Large 48
    */
    size: ESizes;

    /**
     * Primary primary
     * Secondary secondart
    */
    style: EStyles;

    /**
     * @ignore
    */
    children: JSX.Element;
}
