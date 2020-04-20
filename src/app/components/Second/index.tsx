import React             from 'react';
import { EOLocale as T } from 'eo-locale';
import { hot }           from 'react-hot-loader/root';

import { Header }        from '@ui-kit/components';
import { routes }        from '@app/routes/routes';
import * as S            from './styled';
import messages          from './messages';

const Second: React.FC = (): JSX.Element => (
    <>
        <Header />
        <S.Container>
            <S.Text>
                <T.Text id={ messages.title } />
            </S.Text>
            <S.Link to={ routes.home.path }>
                <T.Text id={ messages.link } />
            </S.Link>
            <S.Link to={ routes.protect.path }>
                <T.Text id={ messages.protect } />
            </S.Link>
        </S.Container>
    </>
);

export default hot(Second);
