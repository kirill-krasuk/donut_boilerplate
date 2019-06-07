import React      from 'react';
import { hot }    from 'react-hot-loader/root';

import './style';

import('./greeting');

const App = () => (
    <div className="test">Hello world</div>
);

export default hot(App);
