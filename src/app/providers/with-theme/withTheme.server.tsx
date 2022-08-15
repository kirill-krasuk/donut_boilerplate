import { ThemeProvider } from './ThemeProvider';

import type { FC }       from 'react';

function withServerSideTheme(Component: FC<ServerSideProps>) {
	return function (props: ServerSideProps) {
		return (
			<ThemeProvider>
				<Component { ...props } />
			</ThemeProvider>
		);
	};
}

export { withServerSideTheme };
