import { createToggleHelper } from '@utils/toggler';
import { Theme }              from '@config/theme';

const toggleTheme = createToggleHelper({
	[Theme.Dark] : Theme.Light,
	[Theme.Light]: Theme.Dark
});

export { toggleTheme };
