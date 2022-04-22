export const joinURLPath = (publicPath: string, filename: string) => {
	if (publicPath.endsWith('/')) {
		return `${ publicPath }${ filename }`;
	}

	return `${ publicPath }/${ filename }`;
};
