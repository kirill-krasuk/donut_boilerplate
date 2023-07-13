import { debounce }            from '@shared/lib/functions';

import { createDebouncedHook } from './create-debounced-ook';

const useDebounce = createDebouncedHook(debounce);

export { useDebounce };
