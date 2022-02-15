import { createActionCreator } from '@utils/redux/action-creator';
import { IsFirstRendering }    from '@client/store/types/location';

export const isFirstRenderingAction = createActionCreator<IsFirstRendering>()('core/IS_FIRST_RENDERING');