import React, { useEffect, useRef } from 'react';
import { useDispatch }              from 'react-redux';
import { hot }                      from 'react-hot-loader/root';
import { fromEvent }                from 'rxjs';
import R                            from 'ramda';

import { useClickOutside }          from '@core/hooks/useClickOutside';
import { closeModalAction }         from '@core/actions/modal';
import * as S                       from './styled';
import { Props }                    from './types';

/**
 * basic UI element of Donut Boilerplate
 * @visibleName Modal
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
*/
const Modal: React.FC<Props> = (props) => {
    const { children, onClose, title } = props;

    const dispatch = useDispatch();
    const ref      = useRef() as React.MutableRefObject<HTMLDivElement>;

    const closeModal = R.compose(dispatch, closeModalAction);

    function handleKeyPress(ev: KeyboardEvent) {
        const { keyCode } = ev;

        if (keyCode === 27) {
            closeModal();

            if (onClose) {
                onClose();
            }
        }
    }

    useEffect(() => {
        const subscription = fromEvent<KeyboardEvent>(document, 'keyup')
            .subscribe(handleKeyPress);

        return () => {
            subscription.unsubscribe();
        };
    }, []);

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

export default hot(Modal);
