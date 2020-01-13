// @flow

import React                         from 'react';
import type { ComponentType, Node }  from 'react';
import { FormattedMessage as T }     from 'react-intl';
import { Helmet }                    from 'react-helmet';
import { hot }                       from 'react-hot-loader/root';

import { Header }                    from 'ui-kit/components';
import * as Styled                   from './styled';
import messages                      from './messages';

const HomePage: ComponentType<{}> = (): Node => (
    <>
        <Helmet
            title="Home page"
        />
        <Header />
        <Styled.Container>
            <Styled.Text>
                <T { ...messages.title } />
            </Styled.Text>
            <Styled.Link to="/second">
                <T { ...messages.link } />
            </Styled.Link>
        </Styled.Container>
    </>
);

export default hot(HomePage);
