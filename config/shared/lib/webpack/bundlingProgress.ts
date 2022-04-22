const bundlingProgress =
	(premessage = '') => (percentage: number) => {
		process.stdout.write(`\t${ premessage } ${ (percentage * 100).toFixed(2) }%\r`);
	};

export { bundlingProgress };
