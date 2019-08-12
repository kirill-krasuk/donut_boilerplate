export default {
    test: {
        getPosts: {
            method: 'GET',
            auth  : false,
            path  : '/posts/ppp'
        }
    },
    socket: {
        path: '/api/v2/socket.io'
    }
};
