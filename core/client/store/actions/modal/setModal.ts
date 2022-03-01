import { createActionCreator } from '@lib/redux';
import { SetModal }            from '@client/store/types/modal';

export const setModalAction = createActionCreator<SetModal>()('core/SET_MODAL');
