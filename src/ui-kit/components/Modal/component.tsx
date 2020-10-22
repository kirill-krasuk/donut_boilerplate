import {
    FC, useEffect, useRef, useCallback
} from 'react';
import { useDispatch }       from 'react-redux';
import { fromEvent }         from 'rxjs';
import R                     from 'ramda';

import { useClickOutside }   from '@core/hooks/useClickOutside';
import { closeModalAction }  from '@core/store/actions/modal';
import { useLockBodyScroll } from '@core/hooks';
import * as S                from './styled';
import { Props }             from './types';

const Modal: FC<Props> = (props) => {
    const { children, onClose, title } = props;

    useLockBodyScroll();

    const ref = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    const closeModal = R.compose(dispatch, closeModalAction);

    const handleKeyPress = useCallback((ev: KeyboardEvent) => {
        const { keyCode } = ev;

        if (keyCode === 27) {
            closeModal();

            if (onClose) {
                onClose();
            }
        }
    }, [ closeModal, onClose ]);

    useEffect(() => {
        const subscription = fromEvent<KeyboardEvent>(document, 'keyup')
            .subscribe(handleKeyPress);

        return () => {
            subscription.unsubscribe();
        };
    }, [ handleKeyPress ]);

    useClickOutside(ref, () => {
        if (onClose) {
            onClose();
        }

        closeModal();
    });

    return (
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
    );
};

export default Modal;
