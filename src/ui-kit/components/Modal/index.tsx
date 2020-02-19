import React, { useEffect, useRef } from 'react';
import { useDispatch }              from 'react-redux';
import R                            from 'ramda';

import { useClickOutside }          from '@core/hooks/useClickOutside';
import { closeModalAction }         from '@core/actions/modal';
import * as Styled                  from './styled';
import Button                       from '../Button';

/**
 * basic UI elemnet of Donut Boilerplate
 * @visibleName Modal
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const Modal = (props) => {
    const { children, onClose, title } = props;

    const dispatch = useDispatch();
    const ref      = useRef();

    const closeModal = R.compose(dispatch, closeModalAction);

    const handleKeyPress = (e) => {
        const { keyCode } = e;

        if (keyCode === 27) {
            closeModal();

            if (onClose) {
                onClose();
            }
        }
    };

    useEffect(() => {
        if (document) {
            document.addEventListener('keyup', handleKeyPress);
        }

        return () => {
            document.removeEventListener('keyup', handleKeyPress);
        };
    }, []);

    useClickOutside(ref, () => {
        if (onClose) {
            onClose();
        }

        dispatch(closeModalAction());
    });

    return (
        <Styled.Wrapper ref={ ref }>
            {
                title &&
                <Styled.Head>
                    { title }
                </Styled.Head>
            }
            <Styled.Body>
                { children }
            </Styled.Body>
        </Styled.Wrapper>
    );
};

export default Modal;
