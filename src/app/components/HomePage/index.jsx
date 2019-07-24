// @flow
import React                         from 'react';
import type { ComponentType, Node }  from 'react';
import { Link }                      from 'react-router-dom';
import { Helmet }                    from 'react-helmet';
import { hot }                       from 'react-hot-loader/root';

import { callNotification }          from 'core/utils/notification';
import TestImg                       from 'images/test.png';
import * as Styled                   from './styled';
import style                         from './style.module';

const HomePage: ComponentType<{}> = (): Node => (
    <>
        <Helmet
            title="Home page"
        />
        <h1 className={ style.test }>Heading</h1>
        <Styled.Text>Home Page</Styled.Text>
        <Link to={ '/second' }>go to second page!  sss</Link>
        <img src={ TestImg } />
        <button onClick={ () => callNotification({ body: 'Hello from Home Page' }) }>notify me</button>
    </>
);

export default hot(HomePage);
