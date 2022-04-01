export const joinURLPath = (publicPath: string, filename: string) => {
    if (publicPath.substr(-1) === '/') {
        return `${ publicPath }${ filename }`;
    }

    return `${ publicPath }/${ filename }`;
};
