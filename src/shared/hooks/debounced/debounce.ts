import { debounce }            from '@shared/lib/functions';

import { createDebouncedHook } from './create-debounced-hook';

const useDebounce = createDebouncedHook(debounce);

export { useDebounce };
