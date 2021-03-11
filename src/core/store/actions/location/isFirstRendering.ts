import { createActionCreator } from '@core/utils/redux/action';
import { IsFirstRendering }    from '@core/types/location';

export const isFirstRenderingAction = createActionCreator('core/IS_FIRST_RENDERING')<IsFirstRendering['payload']>();
