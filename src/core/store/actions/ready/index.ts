import { createActionCreator } from '@utils/redux/action-creator';
import { Ready }               from '@core/types/ready';

export const readyAction = createActionCreator<Ready>()('core/READY');
