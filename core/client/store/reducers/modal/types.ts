import { ModalState }   from '@client/store/types/modal';
import * as actions     from '@client/store/actions/modal';
import { ActionTypeOF } from '@lib/redux';

export type State = ModalState;

export type Actions = ActionTypeOF<typeof actions>;
