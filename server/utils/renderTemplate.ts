import { Response }       from 'express';
import * as O             from 'fp-ts/lib/Option';
import { pipe }           from 'fp-ts/lib/pipeable';

import { Context }        from '@server/types/context';
import { StaticTemplate } from '@server/types/template';

const redirectIFStatusExist = (res: Response, url: string, template: StaticTemplate) => (status: number): void => {
    if (status === 404) {
        res.status(404).render('index', template);

        return;
    }

    res.redirect(status as number, url);
};

export function renderTemplate(res: Response, context: Context, template: StaticTemplate): void {
    pipe(
        O.fromNullable(context.to),
        O.fold(
            () => res.render('index', template),
            (url) => pipe(
                O.fromNullable(context.status),
                O.fold(
                    () => res.render('index', template),
                    redirectIFStatusExist(res, url, template)
                )
            )
        )
    );
}
