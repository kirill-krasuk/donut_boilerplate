// @flow

export type FetchType = {|
    type: 'core/FETCH',
    payload: {
        body?: Object,
        query?: Object,
        errorHandler?: Function,
        successHandler?: Function,
        route: Object
    },
|}
