import { Component }    from 'react';

import { Props, State } from './types';

class ErrorBoundary extends Component<Props, State> {
    state = {
        hasError: false
    };

    // TODO: fix error logging
    componentDidCatch() {
        // const http = new HTTP();

        // this.setState({ hasError: true });

        // const stack = err.stack!.split(/\n/);

        // http.setBody({
        //     stack,
        // });

        // http.fetch({
        //     method   : EHTTPMethod.Post,
        //     path     : '/handle_error',
        //     requestTo: 'root'
        // });
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

export default ErrorBoundary;
