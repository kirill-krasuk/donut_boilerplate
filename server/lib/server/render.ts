import type { StaticTemplate } from '@server/lib/react';
import type { Context }        from '@shared/types/client-server';
import type { Response }       from 'express';

function redirectIFStatusExist(res: Response, context: Context, template: StaticTemplate): void {
	if (context.status === 404) {
		res.status(404).render('index.pug', template);

		return;
	}

	res.redirect(context.status as number, context.to!);
}

function renderTemplate(res: Response, context: Context, template: StaticTemplate): void {
	if (context.to) {
		redirectIFStatusExist(res, context, template);

		return;
	}

	res.render('index.pug', template);
}

export { renderTemplate };
