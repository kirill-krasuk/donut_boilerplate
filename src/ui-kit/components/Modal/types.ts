import { ReactNode } from 'react';

export type Props = {
    children: ReactNode;

    /**
     * close handler
    */
    onClose?: () => void;

    /**
     * Modal title
    */
    title: string;
}
