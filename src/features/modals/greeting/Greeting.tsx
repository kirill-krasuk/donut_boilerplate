import { FC, PropsWithChildren } from 'react';

import { Modal }                 from '../ui/Modal';

export const Greeting: FC<PropsWithChildren<unknown>> = () => (
    <Modal title="Welcome">
        Welcome to New Donut Boilerplate!
    </Modal>
);
