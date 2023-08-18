import type { AnyFunction } from '@shared/types/utility';

type Timer = ReturnType<typeof setTimeout>;

type ThrottledFunction<T extends AnyFunction> = T & {
	clear(): void
};
type DebouncedFunction<T extends AnyFunction> = T & {
	flush(): void,
	cancel(): void
};

type DebounceFunction<T extends AnyFunction> = (
	function_: T,
	wait: number
) => DebouncedFunction<T>;
type ThrottleFunction<T extends AnyFunction> = (
	function_: T,
	wait: number
) => ThrottledFunction<T>;

export type {
	Timer,
	ThrottledFunction,
	DebouncedFunction,
	DebounceFunction,
	ThrottleFunction
};
