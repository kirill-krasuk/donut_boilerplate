import { createActionCreator } from '@utils/redux/action-creator';
import { CloseModal }          from '@core/types/modal';

export const closeModalAction = createActionCreator<CloseModal>()('core/CLOSE_MODAL');
