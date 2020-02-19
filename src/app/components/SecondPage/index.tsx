import React                        from 'react';
import { FormattedMessage as T }    from 'react-intl';
import { Helmet }                   from 'react-helmet';
import { hot }                      from 'react-hot-loader/root';

import { Header }                   from '@ui-kit/components';
import * as Styled                  from './styled';
import messages                     from './messages';

const SecondPage: React.FC<{}> = (): JSX.Element => (
    <>
        <Helmet
            title="Second page"
        />
        <Header />
        <Styled.Container>
            <Styled.Text>
                <T { ...messages.title } />
            </Styled.Text>
            <Styled.Link to="/">
                <T { ...messages.link } />
            </Styled.Link>
        </Styled.Container>
    </>
);

export default hot(SecondPage);
