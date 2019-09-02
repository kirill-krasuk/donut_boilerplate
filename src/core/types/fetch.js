// @flow

export type FetchType = {
    type: 'core/FETCH',
    payload: $Exact<{
        body?: Object,
        query?: Object,
        onError?: Function,
        onSuccess?: Function,
        startHandler?: Function,
        finallyHandler?: Function,
        route: Object
    }>,
}
