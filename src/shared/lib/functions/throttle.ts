/* eslint-disable @typescript-eslint/init-declarations */
import type { ThrottledFunction } from '@shared/lib/functions/types';
import type { AnyFunction }       from '@shared/types/utility';

function throttle<T extends AnyFunction>(
	function_: T,
	wait: number
): ThrottledFunction<T> {
	let inThrottle = false;
	let lastResult: ReturnType<T>;

	return function (...args: any[]): ReturnType<T> {
		if (!inThrottle) {
			inThrottle = true;

			lastResult = function_(...args);

			setTimeout(() => {
				inThrottle = false;
			}, wait);
		}

		return lastResult;
	};
}

export { throttle };
