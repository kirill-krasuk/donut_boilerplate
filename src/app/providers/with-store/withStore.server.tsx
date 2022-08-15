import { Provider } from 'react-redux';

import type { FC }  from 'react';

function withServerSideStore(Component: FC<ServerSideProps>) {
	return function (props: ServerSideProps) {
		const { store } = props;

		return (
			<Provider store={ store }>
				<Component { ...props } />
			</Provider>
		);
	};
}

export { withServerSideStore };
