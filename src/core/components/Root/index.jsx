// @flow
import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { renderRoutes }             from 'react-router-config';

import type { PropsType }           from './types';

const Root: ComponentType<PropsType> = (props): Node => {
    const { route } = props;

    return (
        <>
            { renderRoutes(route.routes) }
        </>
    );
};

export default Root;
