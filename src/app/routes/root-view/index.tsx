import { Outlet }   from 'react-router-dom';

import * as S       from './styles';

import type { VFC } from 'react';

const RootView: VFC = () => (
	<S.Wrapper>
		<Outlet />
	</S.Wrapper>
);

export { RootView };
