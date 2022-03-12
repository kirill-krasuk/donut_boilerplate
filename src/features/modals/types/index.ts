import { Modals } from '@features/modals';

export type CallModalObjectPayload = {
    history: boolean,
    id: Modals
}

export type ModalHasHistory = boolean;

export type ModalState = {
    id: Modals | null,
    hasHistory: boolean
}
