import React                     from 'react';
import { FormattedMessage as T } from 'react-intl';
import { hot }                   from 'react-hot-loader/root';

import { Header }                from '@ui-kit/components';
import { routes }                from '@app/routes/routes';
import * as S                    from './styled';
import messages                  from './messages';

const Home: React.FC = (): JSX.Element => (
    <>
        <Header />
        <S.Container>
            <S.Text>
                <T { ...messages.title } />
            </S.Text>
            <S.Link to={ routes.second.path }>
                <T { ...messages.link } />
            </S.Link>
        </S.Container>
    </>
);

export default hot(Home);
