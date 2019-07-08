// @flow
import React                         from 'react';
import type { ComponentType, Node }  from 'react';
import { Link }                      from 'react-router-dom';
import { Helmet }                    from 'react-helmet';
import { hot }                       from 'react-hot-loader/root';

import { callNotification }          from 'core/utils/notification/callNotification';
import './style';

const HomePage: ComponentType<{}> = (): Node => (
    <>
        <Helmet
            title="Home page"
        />
        <h1>Heading</h1>
        <div className="test">Home Page</div>
        <Link to={ '/second' }>go to second page</Link>
        <button onClick={ () => callNotification({ body: 'Hello from Home Page' }) }>notify me</button>
    </>
);

export default hot(HomePage);
