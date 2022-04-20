import { createPortal }               from 'react-dom';
import { useSelector }                from 'react-redux';
import { modalsModel, modalsMap }     from '@features/modals';

import type { FC, PropsWithChildren } from 'react';

const modalNode = document.querySelector('#modal')!;

export const ModalManager: FC<PropsWithChildren<unknown>> = () => {
    const id = useSelector(modalsModel.selectors.getModalId);

    if (!id) {
        return null;
    }

    return createPortal(
        modalsMap[id],
        modalNode
    );
};
