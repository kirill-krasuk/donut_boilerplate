import { FC }     from 'react';
import { Helmet } from 'react-helmet';

import { Home }   from '@app/components';

const HomePage: FC = () => (
    <>
        <Helmet
            title="Home page"
        />
        <Home />
    </>
);

export default HomePage;
