import React     from 'react';
import { Link }  from 'react-router-dom';

import { hot }   from 'react-hot-loader/root';

const SecondPage = () => (
    <>
        <div>Second Page2</div>
        <Link to={ '/' }>go to main page</Link>
    </>
);

export default hot(SecondPage);
