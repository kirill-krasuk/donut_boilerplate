import React            from 'react';
import { createPortal } from 'react-dom';
import { useSelector }  from 'react-redux';
import { hot }          from 'react-hot-loader/root';

import { getModalId }   from '@core/selectors/modal';
import { canUseDOM }    from '@core/utils/dom';
import * as S           from './styled';
import modals           from './modals';

const ModalManager: React.FC = (): JSX.Element | null => {
    const modalId = useSelector(getModalId);

    const CalledModal = modals[modalId || ''];

    function renderModal(): JSX.Element {
        return (
            <S.Wrapper>
                { CalledModal && <CalledModal /> }
            </S.Wrapper>
        );
    }

    if (canUseDOM && CalledModal) {
        const MODAL_NODE: any = document.getElementById('modal');

        return createPortal(renderModal(), MODAL_NODE);
    }

    return null;
};

export default hot(ModalManager);
