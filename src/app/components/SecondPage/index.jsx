// @flow
import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { connect }                  from 'react-redux';
import { compose }                  from 'redux';
import { push }                     from 'connected-react-router';
import { Helmet }                   from 'react-helmet';
import { hot }                      from 'react-hot-loader/root';

import { callNotification }         from 'core/utils/notification/callNotification';
import { CurvedHeader }             from 'ui/components';
import type { PropsType }           from './types';

const SecondPage: ComponentType<PropsType> = (props): Node => {
    const { push } = props;

    return (
        <>
            <Helmet
                title="Second page"
            />
            <CurvedHeader />
            <div className="test">Second Page</div>
            <button onClick={ () => push('/') }>go to main page</button>
            <button onClick={ () => callNotification({ body: 'Hello from Home Page' }) }>notify me</button>
        </>
    );
};

const mapDispatchToProps = ({
    push
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
    hot,
    withConnect
)(SecondPage);
