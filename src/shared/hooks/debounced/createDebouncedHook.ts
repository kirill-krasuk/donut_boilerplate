import { useMemo }          from 'react';

import { useLatest }        from '../useLatest';

import type { AnyFunction } from '@shared/types/utility';

function createDebouncedHook<T extends AnyFunction>(debounceFn: T) {
	function useDebouncedHook<Fn extends AnyFunction>(function_: Fn, wait: number) {
		const latestFn = useLatest(function_);

		return useMemo(() => debounceFn(latestFn.current, wait) as Fn, [ latestFn, wait ]);
	}

	return useDebouncedHook;
}

export { createDebouncedHook };
