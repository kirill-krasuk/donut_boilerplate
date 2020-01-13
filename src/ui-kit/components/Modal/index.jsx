// @flow

import React, { useEffect, useRef } from 'react';
import type { Node }                from 'react';
import { useDispatch }              from 'react-redux';

import { useClickOutside }          from 'core/hooks/useClickOutside';
import { closeModalAction }         from 'core/actions/modal';
import * as Styled                  from './styled';

export type PropsType = {

    /**
     * The modal body
     */

    children: Node,

    /**
     * custom style property width
    */

    width?: string | number,

    /**
     * Handler for additional action on close modal
     */

    onClose?: Function,

    /**
     * title for modal
     */

    title?: string
}

/**
 * basic UI elemnet of Donut Boilerplate
 * @visibleName Modal
 * @version 1.0
 * @author [Kirill Krasuk](https://github.com/kirill-krasuk)
 */

const Modal = (props: PropsType): Node => {
    const { children, onClose, title } = props;

    const dispatch = useDispatch();
    const ref      = useRef();

    const handleKeyPress = (e: KeyboardEvent): void => {
        const { keyCode } = e;

        if (keyCode === 27) {
            dispatch(closeModalAction());

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
