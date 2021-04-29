import { createActionCreator } from '@core/utils/redux/action';
import { SetModal }            from '@core/types/modal';

export const setModalAction = createActionCreator<SetModal>()('core/SET_MODAL');
