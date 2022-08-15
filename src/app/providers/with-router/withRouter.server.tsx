import { StaticRouter }     from 'react-router-dom/server';

import { RedirectProvider } from './RedirectProvider';

import type { FC }          from 'react';

function withServerSideRouter(Component: FC<ServerSideProps>) {
	return function (props: ServerSideProps) {
		const { location, context } = props;

		return (
			<StaticRouter location={ location }>
				<RedirectProvider context={ context }>
					<Component { ...props } />
				</RedirectProvider>
			</StaticRouter>
		);
	};
}

export { withServerSideRouter };
