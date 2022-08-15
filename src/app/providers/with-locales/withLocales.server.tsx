import { LocalesProvider } from './LocalesProvider';

import type { FC }         from 'react';

function withServerSideLocales(Component: FC<ServerSideProps>) {
	return function (props: ServerSideProps) {
		return (
			<LocalesProvider>
				<Component { ...props } />
			</LocalesProvider>
		);
	};
}

export { withServerSideLocales };
