import React, { useEffect } from 'react';
import { createPortal }     from 'react-dom';
import { useSelector }      from 'react-redux';

import { getModalId }       from '@core/selectors/modal';
import { canUseDOM }        from '@core/utils/dom';
import * as Styled          from './styled';
import modals               from './modals';

const ModalManager = () => {
    const modalId  = useSelector(getModalId);

    const CalledModal = modals[modalId];

    useEffect(() => {
        if (document) {
            const root: any = document.getElementById('root');

            if (CalledModal) {
                root.classList.add('blured');
            } else {
                root.classList.remove('blured');
            }
        }
    });

    function renderModal() {
        return (
            <Styled.Wrapper>
                <CalledModal />
            </Styled.Wrapper>
        );
    }

    if (canUseDOM && CalledModal) {
        const MODAL_NODE: any = document.getElementById('modal');

        return createPortal(renderModal(), MODAL_NODE);
    }

    return null;
};

export default ModalManager;
