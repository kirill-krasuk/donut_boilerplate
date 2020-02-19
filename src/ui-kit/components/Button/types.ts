import { Sizes, Styles } from '@ui-kit/enums/button';

export type PropsType = {

    /**
     * onClick handler - not required
    */
    onClick?: Function;

    /**
     * Small 1
     * Medium 2
     * Large 3
    */
    size: Sizes;

    /**
     * Primary 1
     * Secondary 2
    */
    style: Styles;

    /**
     * @ignore
    */
    children: JSX.Element;
}
