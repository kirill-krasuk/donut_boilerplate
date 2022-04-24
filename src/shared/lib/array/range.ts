const range = (start = 0, end = 10, step = 1) => ({
	* [Symbol.iterator]() {
		let current = end - start;

		while (current < end - step) {
			yield (current += step);
		}
	}
});

export { range };
