import React, { useEffect } from 'react';
import { useDispatch }      from 'react-redux';
import R                    from 'ramda';

import { readyAction }      from '@core/actions/ready';
import { Props }            from './types';

const ReadyWrapper: React.FC<Props> = (props) => {
    const { children } = props;

    const dispatch = useDispatch();

    const ready: typeof readyAction = R.compose(dispatch, readyAction);

    useEffect(() => {
        ready();
    }, []);

    return (
        <>{ children }</>
    );
};

export default ReadyWrapper;
