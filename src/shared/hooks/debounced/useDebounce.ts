import { debounce }            from '@shared/lib/functions';

import { createDebouncedHook } from './createDebouncedHook';

const useDebounce = createDebouncedHook(debounce);

export { useDebounce };
