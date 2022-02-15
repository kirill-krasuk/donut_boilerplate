import { FC }           from 'react';
import { createPortal } from 'react-dom';
import { useSelector }  from 'react-redux';

import { getModalId }   from '@client/store/selectors/modal';
import modals           from './modals';

const modalNode = document.getElementById('modal')!;

const ModalManager: FC = () => {
    const id = useSelector(getModalId);

    if (!id) {
        return null;
    }

    return createPortal(
        modals[id],
        modalNode
    );
};

export default ModalManager;
