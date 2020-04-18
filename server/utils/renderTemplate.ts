import { Response }       from 'express';

import { Context }        from '@server/types/context';
import { StaticTemplate } from '@server/types/template';

export function renderTemplate(res: Response, context: Context, template: StaticTemplate): void {
    if (context.url) {
        if (context.status === 404) {
            res.status(404).render('index', template);

            return;
        }

        res.redirect(context.status as number, context.url);
    } else {
        res.render('index', template);
    }
}
