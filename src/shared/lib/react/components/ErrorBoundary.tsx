import { Component, ReactNode } from 'react';

import { HTTPMethod }           from '@lib/http';

type State = {
	hasError: boolean
};

type Props = {
	children: ReactNode
};

export class ErrorBoundary extends Component<Props, State> {
	state = {
		hasError: false,
	};

	componentDidCatch(error: Error) {
		this.setState({ hasError: true });

		const stack = error.stack!.split(/\n/);

		fetch('/handle_error', {
			method: HTTPMethod.Post,
			body  : JSON.stringify(stack),
		});
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return <div>Oops, something goes wrong</div>;
		}

		return children;
	}
}
