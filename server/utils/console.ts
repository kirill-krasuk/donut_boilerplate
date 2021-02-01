import { pipe }              from 'fp-ts/lib/function';

import { consoleAttributes } from '@server/constants/console';

export const resetBefore = (text: string) => `${ consoleAttributes.Reset }${ text }`;
export const resetAfter = (text: string) => `${ text }${ consoleAttributes.Reset }`;
export const reset = (text: string) => pipe(
    text,
    resetBefore,
    resetAfter
);

export const redFont = (text: string) => resetAfter(`${ consoleAttributes.FgRed }${ text }`);
export const blackFont = (text: string) => resetAfter(`${ consoleAttributes.FgBlack }${ text }`);
export const greenFont = (text: string) => resetAfter(`${ consoleAttributes.FgGreen }${ text }`);
export const yellowFont = (text: string) => resetAfter(`${ consoleAttributes.FgYellow }${ text }`);
export const blueFont = (text: string) => resetAfter(`${ consoleAttributes.FgBlue }${ text }`);
export const magentaFont = (text: string) => resetAfter(`${ consoleAttributes.FgMagenta }${ text }`);
export const cyanFont = (text: string) => resetAfter(`${ consoleAttributes.FgCyan }${ text }`);
export const whiteFont = (text: string) => resetAfter(`${ consoleAttributes.FgWhite }${ text }`);

export const redBG = (text: string) => resetAfter(`${ consoleAttributes.BgRed }${ text }`);
export const blackBG = (text: string) => resetAfter(`${ consoleAttributes.BgBlack }${ text }`);
export const greenBG = (text: string) => resetAfter(`${ consoleAttributes.BgGreen }${ text }`);
export const yellowBG = (text: string) => resetAfter(`${ consoleAttributes.BgYellow }${ text }`);
export const blueBG = (text: string) => resetAfter(`${ consoleAttributes.BgBlue }${ text }`);
export const magentaBG = (text: string) => resetAfter(`${ consoleAttributes.BgMagenta }${ text }`);
export const cyanBG = (text: string) => resetAfter(`${ consoleAttributes.BgCyan }${ text }`);
export const whiteBG = (text: string) => resetAfter(`${ consoleAttributes.BgWhite }${ text }`);
