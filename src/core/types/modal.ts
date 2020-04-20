import { Option }  from 'fp-ts/lib/Option';

import { EModals } from '@app/enums/modal';

export type CallModalObjectPayload = {
    history: boolean;
    id: Option<EModals>;
}

export type CallModal = {
    type: 'core/CALL_MODAL';
    payload: EModals | CallModalObjectPayload;
}

export type SetModal = {
    type: 'core/SET_MODAL';
    payload: Option<EModals>;
}

export type SetModalHistoryFlag = {
    type: 'core/SET_MODAL_HISTORY_FLAG';
    payload: boolean;
}

export type CloseModal = {
    type: 'core/CLOSE_MODAL';
    payload: void;
}

export type ModalState = {
    id: Option<EModals>;
    hasHistory: boolean;
}
