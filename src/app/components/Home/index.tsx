import React                     from 'react';
import { FormattedMessage as T } from 'react-intl';
import { hot }                   from 'react-hot-loader/root';

import { Header }                from '@ui-kit/components';
import * as S                    from './styled';
import messages                  from './messages';
import { PropsType }             from './types';

const Home: React.FC<PropsType> = (): JSX.Element => (
    <>
        <Header />
        <S.Container>
            <S.Text>
                <T { ...messages.title } />
            </S.Text>
            <S.Link to="/second">
                <T { ...messages.link } />
            </S.Link>
        </S.Container>
    </>
);

export default hot(Home);
