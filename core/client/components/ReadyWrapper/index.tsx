import { FC, useEffect } from 'react';
import { useDispatch }   from 'react-redux';

import { readyAction }   from '@client/store/actions';
import { Props }         from './types';

const ReadyWrapper: FC<Props> = (props) => {
    const { children } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readyAction());
    }, [ dispatch ]);

    return (
        <>{ children }</>
    );
};

export default ReadyWrapper;
