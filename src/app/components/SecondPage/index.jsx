// @flow
import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { useDispatch }              from 'react-redux';
import { push }                     from 'connected-react-router';
import { Helmet }                   from 'react-helmet';
import { hot }                      from 'react-hot-loader/root';

import { callNotification }         from 'core/utils/notification/callNotification';
import { CurvedHeader }             from 'ui/components';

const SecondPage: ComponentType<{}> = (): Node => {
    const dispatch = useDispatch();

    return (
        <>
            <Helmet
                title="Second page"
            />
            <CurvedHeader />
            <div className="test">Second Page</div>
            <button onClick={ () => dispatch(push('/')) }>go to main page</button>
            <button onClick={ () => callNotification({ body: 'Hello from Home Page' }) }>notify me</button>
        </>
    );
};

export default hot(SecondPage);
