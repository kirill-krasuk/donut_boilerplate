import { FC }            from 'react';
import { EOLocale as T } from 'eo-locale';

import { routes }        from '@config/routes';
import { Header }        from '@features/header';
import * as S            from './styles';
import locales           from '../config/locales';

const Second: FC = () => (
    <>
        <Header />

        <S.Container>
            <S.Text>
                <T.Text id={ locales.title } />
            </S.Text>

            <S.Link to={ routes.home.path }>
                <T.Text id={ locales.link } />
            </S.Link>

            <S.Link to={ routes.protect.path }>
                <T.Text id={ locales.protect } />
            </S.Link>
        </S.Container>
    </>
);

export default Second;
