import React                   from 'react';
import { Helmet }              from 'react-helmet';
import { hot }                 from 'react-hot-loader/root';

import { Home }                from '@app/components';
import prefetch                from '@app/components/Home/prefetch';
import { PrefetchedComponent } from '@core/types/components';

const HomePage: PrefetchedComponent<{}> = () => (
    <>
        <Helmet
            title="Home page"
        />
        <Home />
    </>
);

// TODO: recreate prefetch
HomePage.prefetch = prefetch;

export default hot(HomePage);
