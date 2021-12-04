import { Modals } from '@app/enums/modal';

export type CallModalObjectPayload = {
    history: boolean;
    id: Modals;
}

export type CallModal = {
    type: 'core/CALL_MODAL';
    payload: Modals | CallModalObjectPayload;
}

export type SetModal = {
    type: 'core/SET_MODAL';
    payload: Modals;
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
    id: Modals | null;
    hasHistory: boolean;
}
