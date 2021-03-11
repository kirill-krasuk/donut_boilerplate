import {
    FC, useEffect, useRef, useCallback
} from 'react';
import { fromEvent }         from 'rxjs';

import { useClickOutside }   from '@core/hooks/useClickOutside';
import { useLockBodyScroll } from '@core/hooks';
import { useActions }        from '@core/hooks/useActions';
import * as S                from './styled';
import { Props }             from './types';

const Modal: FC<Props> = (props) => {
    const { children, onClose, title } = props;

    const { closeModalAction } = useActions();

    useLockBodyScroll();

    const ref = useRef<HTMLDivElement>(null);

    const handleKeyPress = useCallback((ev: KeyboardEvent) => {
        const { keyCode } = ev;

        if (keyCode === 27) {
            closeModalAction();

            if (onClose) {
                onClose();
            }
        }
    }, [ closeModalAction, onClose ]);

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

        closeModalAction();
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
