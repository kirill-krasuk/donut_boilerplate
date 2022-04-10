import {
    FC,
    useEffect,
    useRef,
    useCallback,
    PropsWithChildren
} from 'react';

import { useActions, useClickOutside, useLockBodyScroll } from '@hooks/index';
import { KeyCodes }                                       from '@enums/keyCodes';
import * as actions                                       from '../model/store/actions';
import * as S                                             from './styles';
import { Props }                                          from './type';

// TODO: complete modal functional
export const Modal: FC<PropsWithChildren<Props>> = (props) => {
    const { children, onClose, title } = props;

    const { closeModal } = useActions(actions);

    useLockBodyScroll();

    const ref = useRef<HTMLDivElement>(null);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        const { code } = event;

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

    // TODO: move to ui-kit modal
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
