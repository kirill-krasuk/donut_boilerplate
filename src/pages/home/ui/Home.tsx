import { Helmet }   from 'react-helmet';

import { Header }   from '@widgets/header';
import { history }  from '@shared/lib/history';

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
