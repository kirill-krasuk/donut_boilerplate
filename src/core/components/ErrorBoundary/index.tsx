import React, { Component }     from 'react';

import { HTTP, HTTPError }      from '@core/services';
import { PropsType, StateType } from './types.js';

class ErrorBoundary extends Component<PropsType, StateType> {
    state = {
        hasError: false
    }

    componentDidCatch(err: HTTPError) {
        const http = new HTTP();

        this.setState({ hasError: true });

        const stack = err.stack.split(/\n/);

        http.body = {
            stack,
        };

        http.fetch({
            method   : 'POST',
            path     : '/handle_error',
            requestTo: 'root'
        });
    }

    render() {
        if (this.state.hasError) {
            return <div>Oops, something goes wrong</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
