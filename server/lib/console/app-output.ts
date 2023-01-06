import { appBorder }        from './app-border';
import { getAppOutputInfo } from './app-output-info';

import type { OutputInfo }  from './types';

const appOutput = (options: OutputInfo) => {
	appBorder(getAppOutputInfo(options));
};

export { appOutput };
