export default {
    test: {
        getPosts: {
            method: 'GET',
            auth  : false,
            path  : '/posts'
        }
    },
    socket: {
        path: '/socket.io'
    }
};
