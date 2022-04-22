import { appBorder }        from './appBorder';
import { getAppOutputInfo } from './getAppOutputInfo';

type OutputInfo = {
	host: string,
	port: string,
	standardPort?: string
};

function appOutput(options: OutputInfo) {
	return appBorder(getAppOutputInfo(options));
}

export { appOutput };
export type { OutputInfo };
