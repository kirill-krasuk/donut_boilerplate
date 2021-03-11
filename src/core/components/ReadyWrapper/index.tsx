import { FC, useEffect } from 'react';

import { useActions }    from '@core/hooks/useActions';
import { Props }         from './types';

const ReadyWrapper: FC<Props> = (props) => {
    const { children } = props;

    const { readyAction } = useActions();

    useEffect(() => {
        readyAction();
    }, [ readyAction ]);

    return (
        <>{ children }</>
    );
};

export default ReadyWrapper;
