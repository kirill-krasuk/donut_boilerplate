// @flow

import React, { useEffect }          from 'react';
import type  { Node }                from 'react';
import { useDispatch }               from 'react-redux';
import * as R                        from 'ramda';

import { readyAction }               from 'core/actions/ready';
import type { PropsType }            from './types';

const ReadyWrapper = (props: PropsType): Node => {
    const { children } = props;

    const dispatch = useDispatch();

    const ready = R.compose(dispatch, readyAction);

    useEffect(() => { ready(); }, []);

    return (
        <>{ children }</>
    );
};

export default ReadyWrapper;
