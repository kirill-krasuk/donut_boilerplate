import { FC }    from 'react';

import DonutZero from '@images/donut-zero.png';
import * as S    from './styles';

const Page404: FC = () => (
    <S.Container>
        <S.Title>
            4
            <img alt="Zero" src={ DonutZero } />
            4
        </S.Title>

        <S.Description>Sorry :( page not found</S.Description>

        <S.Link to="/">Go to main page</S.Link>
    </S.Container>
);

export default Page404;
