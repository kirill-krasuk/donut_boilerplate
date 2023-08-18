import { throttle }            from '@shared/lib/functions';

import { createDebouncedHook } from './create-debounced-hook';

const useThrottle = createDebouncedHook(throttle);

export { useThrottle };
