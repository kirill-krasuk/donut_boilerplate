import {
    FC, useEffect, useRef, useCallback
} from 'react';
import { useDispatch }                        from 'react-redux';

import { useClickOutside, useLockBodyScroll } from '@hooks/index';
import { KeyCodes }                           from '@enums/keyCodes';
import { closeModalAction }                   from '@client/store/actions';
import * as S                                 from './styles';
import { Props }                              from './types';

export const Modal: FC<Props> = (props) => {
    const { children, onClose, title } = props;

    const dispatch = useDispatch();

    useLockBodyScroll();

    const ref = useRef<HTMLDivElement>(null);

    const handleKeyPress = useCallback((ev: KeyboardEvent) => {
        const { code } = ev;

        if (code === KeyCodes.Escape) {
            dispatch(closeModalAction());

            if (onClose) {
                onClose();
            }
        }
    }, [ dispatch, onClose ]);

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
