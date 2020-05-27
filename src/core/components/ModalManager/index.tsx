import React                from 'react';
import { createPortal }     from 'react-dom';
import { useSelector }      from 'react-redux';
import { hot }              from 'react-hot-loader/root';
import * as O               from 'fp-ts/lib/Option';
import { IO }               from 'fp-ts/lib/IO';
import { pipe }             from 'fp-ts/lib/pipeable';

import { getModalIdOption } from '@core/selectors/modal';
import { Modals }           from '@app/enums/modal';
import * as S               from './styled';
import modals               from './modals';

const ModalManager: React.FC = () => {
    const modalIdOption = useSelector(getModalIdOption);

    const getModalNode: IO<O.Option<HTMLElement>> = () => O.fromNullable(document.getElementById('modal'));

    const createPortalOption = (Modal: JSX.Element) => pipe(
        getModalNode(),
        O.fold(
            () => null,
            (modalNode) => createPortal(Modal, modalNode)
        )
    );

    const renderModal = (id: Modals) => pipe(
        modals[id],
        (CalledModal) => (
            <S.Wrapper>
                <CalledModal />
            </S.Wrapper>
        )
    );

    const renderModalOption = (modalIdOption: O.Option<Modals>) => {
        const id = O.toNullable(modalIdOption);

        return !id
            ? O.none
            : O.some(renderModal(id));
    };

    return pipe(
        renderModalOption(modalIdOption),
        O.fold(
            () => null,
            createPortalOption
        )
    );
};

export default hot(ModalManager);
