import { IsFirstRendering, LocationState } from '@core/types/location';

export type State = LocationState;

export type Action = IsFirstRendering['payload'];
