import { createDebouncedEffectHook } from './createDebouncedEffectHook';
import { useDebounce }               from './useDebounce';

const useDebounceEffect = createDebouncedEffectHook(useDebounce);

export { useDebounceEffect };
