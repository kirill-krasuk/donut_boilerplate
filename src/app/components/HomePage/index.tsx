import React                     from 'react';
import { FormattedMessage as T } from 'react-intl';
import { Helmet }                from 'react-helmet';
import { hot }                   from 'react-hot-loader/root';

import { Header }                from '@ui-kit/components';
import * as S                    from './styled';
import messages                  from './messages';
import { PropsType }             from './types';

const HomePage: React.FC<PropsType> = (): JSX.Element => (
    <>
        <Helmet
            title="Home page"
        />
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

export default hot(HomePage);
