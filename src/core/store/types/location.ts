export type IsFirstRendering = {
    type: 'core/IS_FIRST_RENDERING';
    payload: boolean;
}

export type LocationState = {
    isFirstRendering: boolean;
}
