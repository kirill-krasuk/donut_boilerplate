import { FC }            from 'react';

import { BrowserRouter } from 'react-router-dom';
import HTTPProvider      from '../HTTPProvider';
import Routes            from './RootRoute';

const Router: FC = () => (
    <BrowserRouter>
        <HTTPProvider>
            <Routes />
        </HTTPProvider>
    </BrowserRouter>
);

export default Router;
