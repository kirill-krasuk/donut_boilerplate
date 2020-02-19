import React                     from 'react';
import { FormattedMessage as T } from 'react-intl';
import { hot }                   from 'react-hot-loader/root';

import { Header }                from '@ui-kit/components';
import * as Styled               from './styled';
import messages                  from './messages';

const Second: React.FC<{}> = (): JSX.Element => (
    <>
        <Header />
        <Styled.Container>
            <Styled.Text>
                <T { ...messages.title } />
            </Styled.Text>
            <Styled.Link to="/">
                <T { ...messages.link } />
            </Styled.Link>
            <Styled.Link to="/protect">
                <T { ...messages.protect } />
            </Styled.Link>
        </Styled.Container>
    </>
);

export default hot(Second);
