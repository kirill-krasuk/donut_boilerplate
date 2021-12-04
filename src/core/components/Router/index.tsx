import { FC }            from 'react';

import { BrowserRouter } from 'react-router-dom';
import RedirectProvider  from '../RedirectProvider';
import Routes            from './RootRoute';

const Router: FC = () => (
    <BrowserRouter>
        <RedirectProvider>
            <Routes />
        </RedirectProvider>
    </BrowserRouter>
);

export default Router;
