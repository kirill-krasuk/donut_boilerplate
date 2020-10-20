import { FC }     from 'react';
import { Helmet } from 'react-helmet';

import { Second } from '@app/components';

const SecondPage: FC = () => (
    <>
        <Helmet
            title="Second page"
        />
        <Second />
    </>
);

export default SecondPage;
