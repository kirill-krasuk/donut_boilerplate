import { renderToString } from 'react-dom/server';
import {
    discoverProjectStyles,
    getUsedStyles,
    getCriticalStyles,
    enableReactOptimization
} from 'used-styles';

import { paths }              from '@server/constants/paths';
import { delay }              from '@server/lib/async';

import type { ComponentType } from 'react';

const toTags = (files: string[]) => files
    .map(chunk => `<link href="${ paths.staticDist }${ chunk }" rel="stylesheet" />`)
    .join('');

export async function getStyles(html:  ComponentType | string) {
    enableReactOptimization();

    const lookup = discoverProjectStyles(paths.dist);

    // need delay for discover styles
    await delay(100);

    if (typeof html === 'string') {
        return {
            criticalCss: getCriticalStyles(html, lookup),
            cssChunks  : toTags(getUsedStyles(html, lookup))
        };
    }

    const Component = html;

    const markup = renderToString(<Component />);

    return {
        criticalCss: getCriticalStyles(markup, lookup),
        cssChunks  : toTags(getUsedStyles(markup, lookup))
    };
}
