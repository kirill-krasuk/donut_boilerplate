import { createActionCreator } from '@core/utils/redux/action';
import { CloseModal }          from '@core/types/modal';

export const closeModalAction = createActionCreator('core/CLOSE_MODAL')<CloseModal['payload']>();
