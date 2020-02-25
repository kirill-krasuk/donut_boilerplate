import { EModals } from '@app/enums/modal';

import Greeting    from './Greeting';
import ModalTest   from './ModalTest';

export default {
    [EModals.Greeting] : Greeting,
    [EModals.ModalTest]: ModalTest,
    ['']               : null
};
