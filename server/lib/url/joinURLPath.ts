const joinURLPath = (publicPath: string, filename: string) =>
	(publicPath.endsWith('/')
		? `${ publicPath }${ filename }`
		: `${ publicPath }/${ filename }`);

export { joinURLPath };
