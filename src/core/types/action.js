// @flow

export type ActionType<T, P> = (payload: P) => ({ type: T, payload: P });
