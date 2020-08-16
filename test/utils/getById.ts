import { Wrapper } from '../types/wrapper';

export function getById(wrapper: Wrapper, id: string) {
    return wrapper.find(`[data-testid='${ id }']`);
}
