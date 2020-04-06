import React                     from 'react';
import { FormattedMessage as T } from 'react-intl';
import { hot }                   from 'react-hot-loader/root';

import Car                       from '@images/car.jpg';
import { routes }                from '@app/routes/routes';
import * as UiKit                from '@ui-kit/components';
import * as S                    from './styled';
import messages                  from './messages';

const Home: React.FC = (): JSX.Element => (
    <>
        <UiKit.Header />
        <S.Container>
            <S.Text>
                <T { ...messages.title } />
            </S.Text>
            <S.Link to={ routes.second.path }>
                <T { ...messages.link } />
            </S.Link>
            <picture>
                <source srcSet="/public/images/car.webp?resize=300,300" type="image/webp" />
                <source srcSet={ `${ Car }?resize=300,300` } type="image/jpeg" />
                <img src={ `${ Car }?resize=300,300` } alt="Alt Text!" />
            </picture>

            { /* <img src={ '/public/images/car.webp' } /> */ }
        </S.Container>
    </>
);

export default hot(Home);
