import { FC }            from 'react';
import { Helmet }        from 'react-helmet';
import { EOLocale as T } from 'eo-locale';

import { routes }        from '@shared/config/routes';
import { Header }        from '@features/header';
import * as S            from './styles';
import locales           from '../config/locales';

const Home: FC = () => (
    <>
        <Helmet
            title="Home page"
        />
        <Header />
        <S.Container>
            <S.Text>
                <T.Text id={ locales.title } />
            </S.Text>
            <S.Link to={ routes.second.path }>
                <T.Text id={ locales.link } />
            </S.Link>
        </S.Container>
    </>
);

export default Home;
