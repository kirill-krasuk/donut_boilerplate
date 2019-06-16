import React     from 'react';
import { Link }  from 'react-router-dom';

import { hot }   from 'react-hot-loader/root';

const HomePage = () => (
    <>
        <div>Home Page1</div>
        <Link to={ '/second' }>go to second page</Link>
    </>
);

export default hot(HomePage);
