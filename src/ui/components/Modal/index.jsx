// @flow
import React, { useEffect } from 'react';
import type { Node }        from 'react';
import { useDispatch }      from 'react-redux';
import onClickOutside       from 'react-onclickoutside';

import { closeModalAction } from 'core/actions/modal';
import * as Styled          from './styled';

type PropsType = {

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

    Modal.handleClickOutside = () => {
        if (onClose) {
            onClose();
        }

        dispatch(closeModalAction());
    };

    return (
        <Styled.Wrapper>
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

const clickOutsideConfig = {
    handleClickOutside: () => Modal.handleClickOutside
};

// for visible in styleguide
export { Modal };

export default onClickOutside(Modal, clickOutsideConfig);
