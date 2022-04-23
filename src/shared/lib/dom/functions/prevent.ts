import type { SyntheticEvent } from 'react';

const prevent =
	<E extends SyntheticEvent>(fn: (event: E) => any) =>
		(event: E) => (event.preventDefault(), fn(event));

export { prevent };
