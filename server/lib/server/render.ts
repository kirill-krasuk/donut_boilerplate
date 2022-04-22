import type { Response }       from 'express';
import type { Context }        from '@shared/types/client-server';
import type { StaticTemplate } from '@server/lib/react';

const redirectIFStatusExist = (res: Response, context: Context, template: StaticTemplate): void => {
	if (context.status === 404) {
		res.status(404).render('index.pug', template);

		return;
	}

	return res.redirect(context.status as number, context.to!);
};

export function renderTemplate(res: Response, context: Context, template: StaticTemplate): void {
	if (context.to) {
		redirectIFStatusExist(res, context, template);

		return;
	}

	return res.render('index.pug', template);
}
