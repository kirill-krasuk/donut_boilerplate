/* eslint-disable no-param-reassign */
import { FC }     from 'react';
import { Outlet } from 'react-router-dom';

import * as S     from './styles';

const RootView: FC = () => (
    <S.Wrapper>
        <Outlet />
    </S.Wrapper>
);

export default RootView;
