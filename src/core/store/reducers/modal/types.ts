import { ModalState }   from '@core/store/types/modal';
import * as actions     from '@core/store/actions/modal';
import { ActionTypeOF } from '@shared/types/actions';

export type State = ModalState;

export type Actions = ActionTypeOF<typeof actions>;
