import { RouteConfig } from 'react-router-config';
import { Location }    from 'history';

export type Props = {
    route: RouteConfig;
    location: Location;
    staticContext: {
        status: number;
        url: string;
    };
}
