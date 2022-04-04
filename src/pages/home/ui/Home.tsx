import { FC }            from 'react';
import { Helmet }        from 'react-helmet';
import { EOLocale as T } from 'eo-locale';

import { routes }        from '@config/routes';
import { Header }        from '@features/header';
import * as S            from './styles';
import { locales }       from '../config/locales';

const CodePath = (
    <code>
        <T.Text id={ locales.path } />
    </code>
);

const Home: FC = () => (
    <>
        <Helmet
            title="Home page"
        />

        <Header />

        <S.Container>
            <S.Text>
                <T.Text
                    html
                    id={ locales.title }
                    path={ CodePath }
                />
            </S.Text>

            <S.Link to={ routes.second.path }>
                <T.Text id={ locales.link } />
            </S.Link>
        </S.Container>
    </>
);

export default Home;
