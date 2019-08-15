// @flow
import React                        from 'react';
import type { ComponentType, Node } from 'react';

import { Modal }                    from 'ui/components';

const ModalTest: ComponentType<{}> = (): Node => (
    <Modal title="Test">
        It is a test modal
    </Modal>
);

export default ModalTest;
