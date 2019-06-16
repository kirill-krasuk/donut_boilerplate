import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { Link }                     from 'react-router-dom';
import { Helmet }                   from 'react-helmet';

import { hot }                      from 'react-hot-loader/root';

const SecondPage: ComponentType<{}> = (): Node => (
    <>
        <Helmet
            title="Second page"
        />
        <div>Second Page2</div>
        <Link to={ '/' }>go to main page</Link>
    </>
);

export default hot(SecondPage);
