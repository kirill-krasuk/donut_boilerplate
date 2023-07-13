import { throttle }            from '@shared/lib/functions';

import { createDebouncedHook } from './create-debounced-ook';

const useThrottle = createDebouncedHook(throttle);

export { useThrottle };
