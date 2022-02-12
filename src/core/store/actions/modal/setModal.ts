import { createActionCreator } from '@utils/redux/action-creator';
import { SetModal }            from '@core/store/types/modal';

export const setModalAction = createActionCreator<SetModal>()('core/SET_MODAL');
