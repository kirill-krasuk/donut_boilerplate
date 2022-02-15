import { createActionCreator } from '@utils/redux/action-creator';
import { CloseModal }          from '@client/store/types/modal';

export const closeModalAction = createActionCreator<CloseModal>()('core/CLOSE_MODAL');
