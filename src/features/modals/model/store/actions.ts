import { createAction }                            from '@reduxjs/toolkit';

import { CallModalObjectPayload, ModalHasHistory } from '../../types';
import { Modals }                                  from '../../types/enums';

const callModal           = createAction<CallModalObjectPayload | Modals>('modal/CALL_MODAL');
const closeModal          = createAction('modal/CLOSE_MODAL');
const setModal            = createAction<Modals>('modal/SET_MODAL');
const setModalHistoryFlag = createAction<ModalHasHistory>('modal/SET_MODAL_HISTORY_FLAG');

export {
    callModal,
    closeModal,
    setModal,
    setModalHistoryFlag
};
