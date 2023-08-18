import { createDebouncedEffectHook } from './create-debounced-effect-hook';
import { useThrottle }               from './throttle';

const useThrottleEffect = createDebouncedEffectHook(useThrottle);

export { useThrottleEffect };
