import { Theme }              from '@config/theme';
import { createToggleHelper } from '@lib/toggler';

const toggleTheme = createToggleHelper({
	[Theme.Dark] : Theme.Light,
	[Theme.Light]: Theme.Dark
});

export { toggleTheme };
