import { createActionCreator } from '@core/utils/redux/action';
import { SetModal }            from '@core/types/modal';

export const setModalAction = createActionCreator('core/SET_MODAL')<SetModal['payload']>();
