import { VFC, useEffect }           from 'react';

import { withAppProviders }         from '../providers/client';
import { clearServerDataContainer } from './lib';

// manual connection of fonts
// import './styles/fonts.css';

/**
 * base styles that are used in GlobalStyles,
 * since the CSS-in-JS approach is used by default
 */
// import './styles/base-styles.css';

const Application: VFC = withAppProviders(() => {
	useEffect(() => {
		clearServerDataContainer();
	}, []);

	return null;
});

Application.displayName = 'App';

export { Application };
