import { appBorder }        from './appBorder';
import { getAppOutputInfo } from './getAppOutputInfo';

export type OutputInfo = {
    host: string,
    port: string,
    standardPort?: number | string
};

export function appOutput(options: OutputInfo) {
    return appBorder(getAppOutputInfo(options));
}
