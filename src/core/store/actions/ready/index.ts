import { createActionCreator } from '@utils/redux/action-creator';
import { Ready }               from '@core/store/types/ready';

export const readyAction = createActionCreator<Ready>()('core/READY');
