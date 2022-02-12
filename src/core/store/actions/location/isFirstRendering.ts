import { createActionCreator } from '@utils/redux/action-creator';
import { IsFirstRendering }    from '@core/store/types/location';

export const isFirstRenderingAction = createActionCreator<IsFirstRendering>()('core/IS_FIRST_RENDERING');
