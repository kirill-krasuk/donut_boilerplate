import { RouteConfig }      from 'react-router-config';
import { Location }         from 'history';
import { TransitionStatus } from 'react-transition-group/Transition';

import { Context }          from '@server/types/context';

export type Props = {
    route: RouteConfig;
    location: Location;
    staticContext?: Context;
}

export type AnimationProps = {
    state: TransitionStatus;
}
