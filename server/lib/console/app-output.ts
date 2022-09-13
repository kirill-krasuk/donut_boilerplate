import { appBorder }        from './app-border';
import { getAppOutputInfo } from './app-output-info';

type OutputInfo = {
	host: string,
	port: string,
	standardPort?: string
};

const appOutput = (options: OutputInfo) => {
	appBorder(getAppOutputInfo(options));
};

export { appOutput };
export type { OutputInfo };
