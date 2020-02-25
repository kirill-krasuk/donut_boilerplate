export type Props = {
    children: JSX.Element;

    /**
     * close handler
    */
    onClose: () => void;

    /**
     * Modal title
    */
    title: string;
}
