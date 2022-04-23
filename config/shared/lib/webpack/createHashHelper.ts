const createHashHelper = (isProd: boolean) => (template: string, hash: string) =>
	(isProd
		? template.replace(/\.[^.]+$/, `.[${ hash }]$&`)
		: template);

export { createHashHelper };
