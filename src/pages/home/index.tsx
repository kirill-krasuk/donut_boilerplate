import loadable                   from '@loadable/component';

import { createRoutePage }        from '@lib/react';

import type { PropsWithChildren } from 'react';

const Home = loadable<PropsWithChildren<unknown>>(
	() => import(/* webpackChunkName: "Home" */ './ui/Home'),
	{
		fallback: <div>Loading...</div>
	}
);

export default createRoutePage({
	routeName: 'home',
	component: Home
});
