import path from 'node:path';

const getPathsFromMap = <T extends Record<string, string>>(pathMap: T): T =>
	Object.fromEntries(
		Object.entries(pathMap).map(([ key, value ]) => [ key, path.resolve(value) ])
	) as T;

export { getPathsFromMap };
