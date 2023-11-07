import { Helmet } from 'react-helmet';

import { Header } from '@widgets/header';

import { Body }   from './Body';

const Home = () => (
	<>
		<Helmet title='Home page' />

		<Header />

		<Body />
	</>
);

export default Home;
