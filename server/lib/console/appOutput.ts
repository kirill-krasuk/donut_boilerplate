import { appBorder }        from './appBorder';
import { getAppOutputInfo } from './getAppOutputInfo';

export type OutputInfo = {
    host: string,
    port: string,
    standardPort?: string
};

export function appOutput(options: OutputInfo) {
    return appBorder(getAppOutputInfo(options));
}
