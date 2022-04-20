import { Helmet }  from 'react-helmet';
import { Header }  from '@features/header';

import { Body }    from './Body';

import type { FC } from 'react';

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
