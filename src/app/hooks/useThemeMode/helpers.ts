import { createToggleHelper } from '@core/utils/toggler';
import { Theme }              from '@core/enums/theme';

export const toggleTheme = createToggleHelper({
    [Theme.Dark] : Theme.Light,
    [Theme.Light]: Theme.Dark
});
