import { EHTTPMethod } from '@core/enums/http';

export const api = {
    test: {
        getPosts: {
            method: EHTTPMethod.Get,
            auth  : false,
            path  : '/posts'
        }
    },
    socket: {
        path: '/socket.io'
    }
};
