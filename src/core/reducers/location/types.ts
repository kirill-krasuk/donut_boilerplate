import { IsFirstRenderingType } from '@core/types/location';

export type StateType = {
    isFirstRendering: boolean;
}

export type ActionType = IsFirstRenderingType['payload']
