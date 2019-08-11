// @flow
import React, { useEffect }          from 'react';
import type  { ComponentType, Node } from 'react';
import { useDispatch }               from 'react-redux';

import { readyAction }               from 'core/actions/ready';
import type { PropsType }            from './types';

const ReadyWrapper: ComponentType<PropsType> = (props): Node => {
    const { children } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readyAction());
    }, []);

    return (
        <>{ children }</>
    );
};

export default ReadyWrapper;
