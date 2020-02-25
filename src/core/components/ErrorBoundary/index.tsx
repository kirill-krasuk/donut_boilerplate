import React, { Component } from 'react';

import { HTTP, HTTPError }  from '@core/services';
import { Props, State }     from './types.js';

class ErrorBoundary extends Component<Props, State> {
    state = {
        hasError: false
    }

    componentDidCatch(err: HTTPError): void {
        const http = new HTTP();

        this.setState({ hasError: true });

        const stack = err.stack!.split(/\n/);

        http.body = {
            stack,
        };

        http.fetch({
            method   : 'POST',
            path     : '/handle_error',
            requestTo: 'root'
        });
    }

    render(): JSX.Element {
        if (this.state.hasError) {
            return <div>Oops, something goes wrong</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
