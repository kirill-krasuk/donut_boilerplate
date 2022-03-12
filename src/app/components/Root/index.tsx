/* eslint-disable no-param-reassign */
import { FC }     from 'react';
import { Outlet } from 'react-router-dom';

import * as S     from './styles';

const Root: FC = () => (
    <S.Wrapper>
        <Outlet />
    </S.Wrapper>
);

export default Root;
