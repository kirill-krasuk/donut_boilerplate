const camelToSnake = (str: string) =>
	str
		.replace(/([A-Z])/g, (_match, s1) => `_${ s1.toLowerCase() }`)
		.replace(/(\d)/g, '_$1')
		.replace(/^(_)([a-z])/, '$2')
		.replace(/(?<=\/)(_)([a-z])/, '$2');

export { camelToSnake };
