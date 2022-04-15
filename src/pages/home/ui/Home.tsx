import { FC }     from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '@features/header';
import { Body }   from './Body';

const Home: FC = () => (
    <>
        <Helmet
            title="Home page"
        />

        <Header />

        <Body />
    </>
);

export default Home;
