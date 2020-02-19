export type FetchType = {
    type: 'core/FETCH';
    payload: {
        body?: Record<string, any>;
        query?: Record<string, any>;
        onError?: Function;
        onSuccess?: Function;
        startHandler?: Function;
        finallyHandler?: Function;
        route: Record<string, any>;
    };
}
