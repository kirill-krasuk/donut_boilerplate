import React      from 'react';
import { Link }   from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { hot }    from 'react-hot-loader/root';

const HomePage = () => (
    <>
        <Helmet
            title="Home page"
        />
        <div>Home Page</div>
        <Link to={ '/second' }>go to second page</Link>
    </>
);

export default hot(HomePage);
