import { Outlet }                     from 'react-router-dom';

import * as S                         from './styles';

import type { FC, PropsWithChildren } from 'react';

export const RootView: FC<PropsWithChildren<unknown>> = () => (
    <S.Wrapper>
        <Outlet />
    </S.Wrapper>
);
