enum StatusCode {
    S400 = 'Bad Request',
    S401 = 'Unauthorized',
    S402 = 'Payment Required',
    S403 = 'Forbidden',
    S404 = 'Not Found',
    S405 = 'Method Not Allowed',
    S406 = 'Not Acceptable',
    S408 = 'Request Timeout',
    S422 = 'Unprocessable Entity',
    S500 = 'Internal Server Error',
    S501 = 'Not Implemented',
    S502 = 'Bad Gateway',
    S503 = 'Service Unavailable',
    S504 = 'Gateway Timeout',
}

enum HTTPMethod {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE'
}

export {
    StatusCode,
    HTTPMethod
};
