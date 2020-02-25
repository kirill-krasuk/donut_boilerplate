import { EModals } from '@app/enums/modal';

export type CallModal = {
    type: 'core/CALL_MODAL';
    payload: EModals | {
        history: boolean;
        id: EModals | null;
    };
}

export type SetModal = {
    type: 'core/SET_MODAL';
    payload: EModals | null;
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
    id: EModals | null;
    hasHistory: boolean;
}
