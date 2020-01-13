// @flow

import React                        from 'react';
import type { ComponentType, Node } from 'react';

import { Modal }                    from 'ui-kit/components';

const Greeting: ComponentType<{}> = (): Node => (
    <Modal title="Welcome">
        Welcome to New Donut Boilerplate!
    </Modal>
);

export default Greeting;
