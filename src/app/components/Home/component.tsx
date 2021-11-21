import { FC }            from 'react';
import { EOLocale as T } from 'eo-locale';

import { routes }        from '@app/routes/routes';
import Header            from '@app/components/Header';
import * as S            from './styles';
import messages          from './messages';

const Home: FC = () => (
    <>
        <Header />
        <S.Container>
            <S.Text>
                <T.Text id={ messages.title } />
            </S.Text>
            <S.Link to={ routes.second.path }>
                <T.Text id={ messages.link } />
            </S.Link>
        </S.Container>
    </>
);

export default Home;
