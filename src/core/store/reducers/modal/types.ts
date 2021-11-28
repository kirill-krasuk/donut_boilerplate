import { ModalState }   from '@core/types/modal';
import * as actions     from '@core/store/actions/modal';
import { ActionTypeOF } from '@core/types/actions';

export type State = ModalState;

export type Actions = ActionTypeOF<typeof actions>;
