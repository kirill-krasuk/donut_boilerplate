import { FC }     from 'react';
import { Outlet } from 'react-router-dom';

import * as S     from './styles';

export const RootView: FC = () => (
    <S.Wrapper>
        <Outlet />
    </S.Wrapper>
);
