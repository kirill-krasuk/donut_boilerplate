import { appBorder }        from './appBorder';
import { getAppOutputInfo } from './getAppOutputInfo';

type OutputInfo = {
	host: string,
	port: string,
	standardPort?: string
};

const appOutput = (options: OutputInfo) => appBorder(getAppOutputInfo(options));

export { appOutput };
export type { OutputInfo };
