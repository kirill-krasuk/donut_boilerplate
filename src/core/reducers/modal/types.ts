import { SetModal, SetModalHistoryFlag, ModalState } from '@core/types/modal';

export type State = ModalState;

export type Payloads = SetModal['type'] | SetModalHistoryFlag['type'];
