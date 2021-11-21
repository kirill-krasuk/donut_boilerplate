import { RouteObject }      from 'react-router';
import { Location }         from 'history';
import { TransitionStatus } from 'react-transition-group/Transition';

import { Context }          from '@server/types/context';

export type Props = {
    route: RouteObject;
    location: Location;
    staticContext?: Context;
}

export type AnimationProps = {
    state: TransitionStatus;
}
