import { throttle }            from '@shared/lib/functions';

import { createDebouncedHook } from './createDebouncedHook';

const useThrottle = createDebouncedHook(throttle);

export { useThrottle };
