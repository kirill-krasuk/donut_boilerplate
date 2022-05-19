import { Helmet }   from 'react-helmet';

import { Header }   from '@features/header';

import { Body }     from './Body';

import type { VFC } from 'react';

const Home: VFC = () => (
	<>
		<Helmet title='Home page' />

		<Header />

		<Body />
	</>
);

export default Home;
