import React                   from 'react';
import { Helmet }              from 'react-helmet';
import { hot }                 from 'react-hot-loader/root';

import { Home }                from '@app/components';
import prefetch                from '@app/components/Home/prefetch';
import { PrefetchedComponent } from '@core/types/components';
import { PostsRD }             from '@app/types/posts';

export type InitialProps = {
    posts: PostsRD;
}

const HomePage: PrefetchedComponent<InitialProps> = (props) => (
    <>
        <Helmet
            title="Home page"
        />
        <Home { ...props } />
    </>
);

HomePage.prefetch = prefetch;

export default hot(HomePage);
