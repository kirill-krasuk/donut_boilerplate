import { FC }                     from 'react';
import { createPortal }           from 'react-dom';
import { useSelector }            from 'react-redux';

import { modalsModel, modalsMap } from '@features/modals';

const modalNode = document.querySelector('#modal')!;

export const ModalManager: FC = () => {
    const id = useSelector(modalsModel.selectors.getModalId);

    if (!id) {
        return null;
    }

    return createPortal(
        modalsMap[id],
        modalNode
    );
};
