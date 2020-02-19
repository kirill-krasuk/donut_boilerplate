import React     from 'react';

import { Modal } from '@ui-kit/components';

const Greeting: React.FC<{}> = (): JSX.Element => (
    <Modal title="Welcome">
        Welcome to New Donut Boilerplate!
    </Modal>
);

export default Greeting;
