import { createToggleHelper } from '@utils/toggler';
import { Theme }              from '@entities/theme';

export const toggleTheme = createToggleHelper({
    [Theme.Dark] : Theme.Light,
    [Theme.Light]: Theme.Dark
});
