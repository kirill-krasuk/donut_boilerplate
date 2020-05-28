import { RouteConfig }      from 'react-router-config';
import { Location }         from 'history';
import { TransitionStatus } from 'react-transition-group/Transition';

export type Props = {
    route: RouteConfig;
    location: Location;
    staticContext: {
        status: number;
        url: string;
    };
}

export type AnimationProps = {
    state: TransitionStatus;
}
