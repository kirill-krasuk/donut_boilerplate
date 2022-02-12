import { createToggleHelper } from '@utils/toggler';
import { Theme }              from '@app/enums/theme';

export const toggleTheme = createToggleHelper({
    [Theme.Dark] : Theme.Light,
    [Theme.Light]: Theme.Dark
});
