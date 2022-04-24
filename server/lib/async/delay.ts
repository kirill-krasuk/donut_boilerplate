const delay = (ms: number) =>
	new Promise<void>(resolve => {
		setTimeout(() => resolve(), ms);
	});

export { delay };
