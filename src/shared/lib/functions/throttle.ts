import type { ThrottledFunction } from '@shared/lib/functions/types';
import type { AnyFunction }       from '@shared/types/utility';

function throttle<T extends AnyFunction>(function_: T, wait: number): ThrottledFunction<T> {
	let timerID: NodeJS.Timeout | null                         = null;
	let queuedArgs: Parameters<T> | null                       = null;
	let queuedResolve: ((value: ReturnType<T>) => void) | null = null;
	let inThrottle                                             = false;

	const clear = () => {
		if (timerID) {
			clearTimeout(timerID);
			timerID = null;
		}

		queuedArgs    = null;
		queuedResolve = null;
		inThrottle    = false;
	};

	const execute = () => {
		if (queuedArgs && queuedResolve) {
			const args    = queuedArgs;
			const resolve = queuedResolve;

			queuedArgs    = null;
			queuedResolve = null;

			resolve(function_(...args));
		}
	};

	const throttledFunction = (...args: Parameters<T>): Promise<ReturnType<T>> => {
		if (inThrottle) {
			return new Promise(resolve => {
				queuedArgs    = args;
				queuedResolve = resolve;
			});
		}

		inThrottle   = true;
		const result = function_(...args);

		timerID = setTimeout(() => {
			execute();
		}, wait);

		return Promise.resolve(result);
	};

	throttledFunction.clear = clear;

	return throttledFunction as ThrottledFunction<T>;
}

export { throttle };
