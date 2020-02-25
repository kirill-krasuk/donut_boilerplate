import { IsFirstRendering } from '@core/types/location';

export type State = {
    isFirstRendering: boolean;
}

export type Action = IsFirstRendering['payload']
