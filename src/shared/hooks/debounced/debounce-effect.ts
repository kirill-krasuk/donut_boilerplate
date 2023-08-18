import { createDebouncedEffectHook } from './create-debounced-effect-hook';
import { useDebounce }               from './debounce';

const useDebounceEffect = createDebouncedEffectHook(useDebounce);

export { useDebounceEffect };
