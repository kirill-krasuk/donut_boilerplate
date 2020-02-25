import React, { useEffect, useRef } from 'react';
import { useDispatch }              from 'react-redux';
import { hot }                      from 'react-hot-loader/root';
import R                            from 'ramda';

import { useClickOutside }          from '@core/hooks/useClickOutside';
import { closeModalAction }         from '@core/actions/modal';
import * as S                       from './styled';
import { Props }                    from './types';

/**
 * basic UI elemnet of Donut Boilerplate
 * @visibleName Modal
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
*/
const Modal: React.FC<Props> = (props): JSX.Element => {
    const { children, onClose, title } = props;

    const dispatch = useDispatch();
    const ref      = useRef() as React.MutableRefObject<HTMLDivElement>;

    const closeModal = R.compose(dispatch, closeModalAction);

    function handleKeyPress(this: Document, ev: KeyboardEvent): any {
        const { keyCode } = ev;

        if (keyCode === 27) {
            closeModal();

            if (onClose) {
                onClose();
            }
        }
    }

    useEffect(() => {
        if (document) {
            document.addEventListener('keyup', handleKeyPress);
        }

        return (): void => {
            document.removeEventListener('keyup', handleKeyPress);
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
