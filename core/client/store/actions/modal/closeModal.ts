import { createActionCreator } from '@lib/redux';
import { CloseModal }          from '@client/store/types/modal';

export const closeModalAction = createActionCreator<CloseModal>()('core/CLOSE_MODAL');
