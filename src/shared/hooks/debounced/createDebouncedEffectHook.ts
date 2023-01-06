import { useEffect }        from 'react';

import type { AnyFunction } from '@shared/types/utility';

function createDebouncedEffectHook<T extends AnyFunction>(useDebounceHook: T) {
	function useDebouncedEffectHook<Fn extends AnyFunction>(
		effect: Fn,
		deps: any[] = [],
		wait: number
	) {
		const debouncedEffect = useDebounceHook(effect, wait);

		useEffect(() => {
			debouncedEffect();
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [ debouncedEffect, ...deps ]);
	}

	return useDebouncedEffectHook;
}

export { createDebouncedEffectHook };
