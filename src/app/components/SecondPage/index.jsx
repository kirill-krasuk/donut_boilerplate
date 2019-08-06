// @flow
import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { Link }                     from 'react-router-dom';
import { Helmet }                   from 'react-helmet';
import { hot }                      from 'react-hot-loader/root';

import { Header }                   from 'ui/components';
import * as Styled                  from './styled';

const SecondPage: ComponentType<{}> = (): Node => (
    <>
        <Helmet
            title="Second page"
        />
        <Header />
        <Styled.Container>
            <Styled.Text>Edit src/app/components/SecondPage save and reload</Styled.Text>
            <Link to="/">go to see the main page</Link>
        </Styled.Container>
    </>
);

export default hot(SecondPage);
