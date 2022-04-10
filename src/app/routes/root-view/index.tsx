import { FC, PropsWithChildren } from 'react';
import { Outlet }                from 'react-router-dom';

import * as S                    from './styles';

export const RootView: FC<PropsWithChildren<unknown>> = () => (
    <S.Wrapper>
        <Outlet />
    </S.Wrapper>
);
