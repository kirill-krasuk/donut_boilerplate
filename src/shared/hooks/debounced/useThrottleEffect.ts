import { createDebouncedEffectHook } from './createDebouncedEffectHook';
import { useThrottle }               from './useThrottle';

const useThrottleEffect = createDebouncedEffectHook(useThrottle);

export { useThrottleEffect };
