import { renderToString } from 'react-dom/server';
import { ComponentType }  from 'react';
import {
    discoverProjectStyles,
    getUsedStyles,
    getCriticalStyles,
    enableReactOptimization
} from 'used-styles';

import { paths } from '@server/constants/paths';

enableReactOptimization();

const lookup = discoverProjectStyles(paths.dist);

const toTags = (files: string[]) => files
    .map(chunk => `<link href="${ paths.staticDist }${ chunk }" rel="stylesheet" />`)
    .join('');

export function getStyles(html:  ComponentType | string) {
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
