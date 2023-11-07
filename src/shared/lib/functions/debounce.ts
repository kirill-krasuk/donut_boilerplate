import type { DebouncedFunction } from '@shared/lib/functions';
import type { AnyFunction }       from '@shared/types/utility';

type Timer = ReturnType<typeof setTimeout>;

function debounce<T extends AnyFunction>(function_: T, wait: number): DebouncedFunction<T> {
	let timerID: Timer | null            = null;
	let queuedArgs: Parameters<T> | null = null;

	const debounced = (...args: Parameters<T>): void => {
		queuedArgs = args;

		const later = () => {
			clearTimeout(timerID!);
			function_(...args);
			queuedArgs = null;
		};

		clearTimeout(timerID!);

		timerID = setTimeout(later, wait);
	};

	debounced.flush = () => {
		clearTimeout(timerID!);
		timerID = null;

		function_(...queuedArgs!);
	};

	debounced.cancel = () => {
		clearTimeout(timerID!);
		timerID = null;
	};

	return debounced as DebouncedFunction<T>;
}

export { debounce };
