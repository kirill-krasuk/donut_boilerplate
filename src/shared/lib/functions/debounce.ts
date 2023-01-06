import type { DebouncedFunction } from '@shared/lib/functions';
import type { AnyFunction }       from '@shared/types/utility';

type Timer = ReturnType<typeof setTimeout>;

function debounce<T extends AnyFunction>(
	function_: T,
	wait: number
): DebouncedFunction<T> {
	let timerID: Timer | null = null;

	return function (...args: any[]): void {
		const later = () => {
			clearTimeout(timerID!);
			function_(...args);
		};

		clearTimeout(timerID!);

		timerID = setTimeout(later, wait);
	};
}

export { debounce };
