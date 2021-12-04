import {
    FC, useEffect, useRef, useCallback
} from 'react';

import { useClickOutside }   from '@core/hooks/useClickOutside';
import { useLockBodyScroll } from '@core/hooks';
import { useActions }        from '@core/hooks/useActions';
import { KeyCodes }          from '@core/enums/keyCodes';
import * as S                from './styles';
import { Props }             from './types';

const Modal: FC<Props> = (props) => {
    const { children, onClose, title } = props;

    const { closeModalAction } = useActions();

    useLockBodyScroll();

    const ref = useRef<HTMLDivElement>(null);

    const handleKeyPress = useCallback((ev: KeyboardEvent) => {
        const { code } = ev;

        if (code === KeyCodes.Escape) {
            closeModalAction();

            if (onClose) {
                onClose();
            }
        }
    }, [ closeModalAction, onClose ]);

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

        closeModalAction();
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
