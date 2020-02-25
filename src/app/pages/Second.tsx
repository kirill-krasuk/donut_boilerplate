import React      from 'react';
import { hot }    from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';

import { Second } from '@app/components';

const SecondPage: React.FC = (): JSX.Element => (
    <>
        <Helmet
            title="Second page"
        />
        <Second />
    </>
);

export default hot(SecondPage);
