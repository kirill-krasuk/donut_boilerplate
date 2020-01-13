// @flow

export type FetchType = {
    type: 'core/FETCH',
    payload: {|
        body?: Object,
        query?: Object,
        onError?: Function,
        onSuccess?: Function,
        startHandler?: Function,
        finallyHandler?: Function,
        route: Object
    |},
}
