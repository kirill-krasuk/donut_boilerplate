import {
    FC,
    useEffect,
    useRef,
    useCallback
} from 'react';

import { modalsModel }                                    from '@features/modals';
import { useActions, useClickOutside, useLockBodyScroll } from '@hooks/index';
import { KeyCodes }                                       from '@enums/keyCodes';
import * as S                                             from './styles';
import { Props }                                          from './type';

export const Modal: FC<Props> = (props) => {
    const { children, onClose, title } = props;

    const { closeModal } = useActions(modalsModel.actions);

    useLockBodyScroll();

    const ref = useRef<HTMLDivElement>(null);

    const handleKeyPress = useCallback((ev: KeyboardEvent) => {
        const { code } = ev;

        if (code === KeyCodes.Escape) {
            closeModal();

            if (onClose) {
                onClose();
            }
        }
    }, [ closeModal, onClose ]);

    useEffect(() => {
        document.addEventListener('keyup', handleKeyPress);

        return () => {
            document.removeEventListener('keyup', handleKeyPress);
        };
    }, [ handleKeyPress ]);

    useClickOutside(ref, () => {
        if (onClose) {
            onClose();
        }

        closeModal();
    });

    return (
        <S.Backdrop>
            <S.Wrapper ref={ ref }>
                {
                    title &&
                    <S.Head>
                        { title }
                    </S.Head>
                }

                <S.Body>
                    { children }
                </S.Body>
            </S.Wrapper>
        </S.Backdrop>
    );
};

export default Modal;
