import { InferValueTypes } from '@core/types/utility';
import { ModalState }      from '@core/types/modal';
import * as actions        from '@core/store/actions/modal';

export type State = ModalState;

export type Actions = ReturnType<InferValueTypes<typeof actions>>;
