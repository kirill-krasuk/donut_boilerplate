import type { Modals } from '@features/modals';

type CallModalObjectPayload = {
	history: boolean,
	id: Modals
};

type ModalHasHistory = boolean;

type ModalState = {
	id: Modals | null,
	hasHistory: boolean
};

export type { CallModalObjectPayload, ModalHasHistory, ModalState };
